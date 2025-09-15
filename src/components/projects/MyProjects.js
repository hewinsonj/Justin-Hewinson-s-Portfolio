import ProjectSegment from "./ProjectSegment";
import LoadingScreen from "../shared/LoadingPage";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import ProjectDetail from "../NewComponents/ProjectDetail";
import {
  Menu,
  Icon,
  Sticky,
  Modal,
  Button,
  Checkbox,
  Grid,
  Image,
  Segment,
  Sidebar,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  MenuMenu,
  Dropdown,
  MenuItem,
  Form,
  Container,
  List,
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
  const [bigMenu, setBigMenu] = React.useState(true);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    componentDidMount();
    componentWillUnmount();
    updateDimensions();
  }, []);

  const componentDidMount = () => {
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);
  };

  const componentWillUnmount = () => {
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);
  };

  const updateDimensions = () => {
    setWidth((prevWidth) => (prevWidth = window.innerWidth));
    setHeight((prevHeight) => (prevHeight = window.innerHeight));

    if (window.innerWidth > 1536) {
      handleWindowBig();
    } else {
      handleWindowSmall();
    }
  };

  const handleWindowBig = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = true));
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
  };

  componentDidMount();
  componentWillUnmount();
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
    filterProjects.map((project) => (
      <Link
        to={`/projectDetail/${project.id}`}
        class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
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
      <Form raised>
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
