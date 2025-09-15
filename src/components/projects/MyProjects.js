import ProjectSegment from "./ProjectSegment";
import LoadingScreen from "../shared/LoadingPage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Form,
  Divider,
  Header,
} from "semantic-ui-react";

const MyProjects = ({
  allProjects,
  filterProjects,
  msgAlert,
  user,
  addProject,
  handleChange,
}) => {
  const [bigMenu, setBigMenu] = useState(true);

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

  const handleWindowBig = () => setBigMenu(true);
  const handleWindowSmall = () => setBigMenu(false);

const priorityOrder = ['a', 'b', 'c', 'd', 'e', 'f'];

const myProjectsJSX = allProjects ? (
  filterProjects
    .slice() // shallow copy so we don’t mutate props
    .sort((p1, p2) => {
      return priorityOrder.indexOf(p1.priority) - priorityOrder.indexOf(p2.priority);
    })
    .map((project) => (
      <ProjectSegment
        key={project.id}
        project={project}
        user={user}
        msgAlert={msgAlert}
        addProject={(type) => addProject(type)}
      />
    ))
) : (
  <LoadingScreen />
);
  const myProjectsMiniJSX = allProjects ? (
      filterProjects
        .slice() // shallow copy so we don’t mutate props
        .sort((p1, p2) => {
          return priorityOrder.indexOf(p1.priority) - priorityOrder.indexOf(p2.priority);
        })
        .map((project) => (
      <Link
        key={project.id}
        to={`/projectDetail/${project.id}`}
        className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      >
        <Divider hidden />
        <Grid centered>
          <Grid.Row>
            <Segment>
              <Header size="huge" icon textAlign="center" color="black">
                {project.projTitle}
              </Header>
              <Image src={project.img1} />
              <p>cilck to view detail</p>
              <Segment inverted color="black">
                {project.client}
              </Segment>
            </Segment>
          </Grid.Row>
        </Grid>
      </Link>
    ))
  ) : (
    <LoadingScreen />
  );

  return (
    <>
      <Form>
        <Form.Input
          placeholder="Filter  results  by  coding technologies"
          onChange={handleChange}
          size="big"
        ></Form.Input>
      </Form>
      {bigMenu ? myProjectsJSX : myProjectsMiniJSX}
    </>
  );
};

export default MyProjects;
