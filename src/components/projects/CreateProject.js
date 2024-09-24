import React, { useState } from "react";
import { createProject } from "../../api/project";

import ProjectForm from "../shared/ProjectForm";

const CreateProject = ({ user, msgAlert, handleClose, setNewProject }) => {
  const defaultProject = {
    projTitle: "",
    priority: "",
    img1: "",
    img2: "",
    img3: "",
    description: "",
    finishDate: "",
    startDate: "",
    link1: "",
    link2: "",
    link3: "",
    role: "",
    client: "",
    progress: 0,
    private: false,
  };

  const [project, setProject] = useState(defaultProject);
  const [projectModalShow, setProjectModalShow] = useState(false);

  const handleChange = (e, target) => {
    setProject((prevProject) => {
      const { name, value } = target;
      const updatedName = name;
      let updatedValue = value;
      // handle number type
      if (target.type === "number") {
        // change from string to actual number
        updatedValue = parseInt(e.target.value);
      }

      //handle the checkbox
      if (updatedName === "private" && target.checked) {
        updatedValue = true;
      } else if (updatedName === "private" && !target.checked) {
        updatedValue = false;
      }

      const updatedProject = { [updatedName]: updatedValue };

      return { ...prevProject, ...updatedProject };
    });
  };
  const handleCreateProject = (e) => {
    e.preventDefault();

    createProject(user, project)
      .then(() => handleClose())
      .then(() => {
        msgAlert({
          heading: "Success",
          message: "Created Project",
          variant: "success",
        });
      })
      .then(() => setNewProject((prev) => !prev))
      .catch((error) => {
        msgAlert({
          heading: "Failure",
          message: "Create Project Failure" + error,
          variant: "danger",
        });
      });
  };

  return (
    <ProjectForm
      show={projectModalShow}
      project={project}
      handleChange={handleChange}
      heading="Create a new Project!"
      handleSubmit={handleCreateProject}
      handleClose={() => setProjectModalShow(false)}
    />
  );
};

export default CreateProject;
