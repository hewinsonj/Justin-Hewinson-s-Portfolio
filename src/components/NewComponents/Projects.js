import React, { useState, useEffect } from "react";
import { Segment, Header, Icon } from "semantic-ui-react";
import { getAllProjects } from "../../api/project";
import MyProjects from "../projects/MyProjects";

const Projects = ({ msgAlert, newProject, user }) => {
  const [allProjects, setAllProjects] = useState(null);
  const [filterProjects, setFilterProjects] = useState([]);
  const [bigMenu, setBigMenu] = React.useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1536) {
        handleWindowBig();
      } else {
        handleWindowSmall();
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("load", updateDimensions);
    };
  }, []);

  useEffect(() => {
    getAllProjects().then((res) => {
      setAllProjects(res.data.projects.reverse());
      setFilterProjects(res.data.projects.reverse());
    });
  }, []);

  const handleWindowBig = () => setBigMenu(true);
  const handleWindowSmall = () => setBigMenu(false);

  const handleChange = (e) => {
    let projects = allProjects;
    setFilterProjects(
      projects.filter((a) =>
        a.client.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  return (
    <>
      {bigMenu ? (
        <Header
          size="huge"
          icon
          inverted
          textAlign="center"
          className="landingback"
        >
          <Icon name="database" size="huge" className="landingback " />
          Projects
        </Header>
      ) : (
        <Header
          size="large"
          icon
          inverted
          textAlign="center"
          className="landingback"
        >
          <Icon name="database" size="small" className="landingback" />
          Projects
        </Header>
      )}

      <Segment
        padded
        color="grey"
        inverted
        style={{
          border: "solid",
          borderColor: "lightgrey",
        }}
      >
        <MyProjects
          allProjects={allProjects}
          msgAlert={msgAlert}
          user={user}
          filterProjects={filterProjects}
          handleChange={handleChange}
        />
      </Segment>

      {/*  */}
    </>
  );
};

export default Projects;
