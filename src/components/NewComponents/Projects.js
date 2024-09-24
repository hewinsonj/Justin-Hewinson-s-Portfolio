import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Divider,
  Segment,
  Grid,
  Feed,
  Icon,
  Image,
  Progress,
  Modal,
  Container,
  Header,
} from "semantic-ui-react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import ProjectSegment from "../projects/ProjectSegment";
import LoadingScreen from "../shared/LoadingPage";
import { getAllProjects } from "../../api/project";
import MyProjects from "../projects/MyProjects";

const Projects = ({ msgAlert, newProject, user }) => {
  const [allProjects, setAllProjects] = useState(null);
  const [filterProjects, setFilterProjects] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [bigMenu, setBigMenu] = React.useState(true);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    componentDidMount();
    componentWillUnmount();
    updateDimensions();
  }, []);

  useEffect(() => {
    getAllProjects().then((res) => {
      setAllProjects(res.data.projects.reverse());
      setFilterProjects(res.data.projects.reverse());
    });
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
        <Header size="huge" icon inverted textAlign="center">
          <Icon name="database" size="huge" />
          Projects
        </Header>
      ) : (
        <Header size="large" icon inverted textAlign="center">
          <Icon name="database" size="small" />
          Projects
        </Header>
      )}

      <Segment
        padded
        color="grey"
        inverted
        style={{
          border: "solid",
          bordercolor: "lightgrey",
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
