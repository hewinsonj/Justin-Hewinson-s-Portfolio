import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {  Button, Divider, Segment, Grid, Feed, Icon, Image, Progress, Modal, Container, Header } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import ProjectSegment from '../projects/ProjectSegment'
import LoadingScreen from '../shared/LoadingPage'
import { getAllProjects } from '../../api/project'
import MyProjects from '../projects/MyProjects'


const Projects = ({ msgAlert, newProject, user }) => {

    const [allProjects, setAllProjects] = useState(null)
    const [filterProjects, setFilterProjects] = useState([])
    const [searchText, setSearchText] = useState([])
    const [bigMenu, setBigMenu] = React.useState(true);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    useEffect(() => {
      componentDidMount();
      componentWillUnmount();
      updateDimensions();
    }, []);

    useEffect(() => {
        getAllProjects()
            .then(res => {
                setAllProjects(res.data.projects.reverse())
                setFilterProjects(res.data.projects.reverse())
            })
    }, [])
    
    const componentDidMount = () => {
      window.addEventListener("resize", updateDimensions);
      window.addEventListener("load", updateDimensions);

    //   console.log(window.innerWidth, "YOOOO1");
    };

    const componentWillUnmount = () => {
      window.addEventListener("resize", updateDimensions);
      window.addEventListener("load", updateDimensions);

    //   console.log(window.innerWidth, "YOOOO2");
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
    //   console.log("handleBig happened", bigMenu);
    };
    const handleWindowSmall = () => {
      setBigMenu((prevBigMenu) => (prevBigMenu = false));
    //   console.log("handleSmall happened", window.innerWidth, bigMenu);
    };

    componentDidMount();
    componentWillUnmount();


    const handleChange = (e) => {
        // const caseUnsense = e.target.value.toUpperCase()
        let projects = allProjects
        setFilterProjects(projects.filter(
        a => a.client.toUpperCase().includes(e.target.value.toUpperCase()))
        )
    }

   



	return (
    <>
      {/* <Divider hidden /> */}
      {bigMenu ? (
        <Header size="huge" icon inverted textAlign="center">
          <Icon
            name="database"
            size="huge"
            // onClick={handleTriggerRefresh}
          />
          Projects
        </Header>
      ) : (
        <Header size="large" icon inverted textAlign="center">
          <Icon
            name="database"
            size="small"
            // onClick={handleTriggerRefresh}
          />
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
}

export default Projects