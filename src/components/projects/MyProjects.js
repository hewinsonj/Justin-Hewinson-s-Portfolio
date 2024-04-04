import ProjectSegment from "./ProjectSegment"
import LoadingScreen from "../shared/LoadingPage"
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation, } from "react-router-dom";
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



const MyProjects = ({allProjects, filterProjects, msgAlert, user, addProject, handleChange}) => {

    
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

      // console.log(window.innerWidth, "YOOOO1");
    };

    const componentWillUnmount = () => {
      window.addEventListener("resize", updateDimensions);
      window.addEventListener("load", updateDimensions);

      // console.log(window.innerWidth, "YOOOO2");
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


    const myProjectsJSX = allProjects ? 
        filterProjects.map((project) => (
            <ProjectSegment 
            key={project.id} 
            project={project} 
            user={user} 
            msgAlert={msgAlert} 
            addProject={(type)=>addProject(type)}
            />
        ))
        :
        <LoadingScreen />
    
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
            {bigMenu ? (myProjectsJSX) : (myProjectsMiniJSX)}

        {/* --------------------------------------------------------------- */}

        {/* <Segment id="actListItems" raised>
          <Container fluid>
            <Grid columns={4} textAlign="center">
              <Grid.Row>
                <Grid.Column width={11} padded textAlign="center">
                  <Segment>
                    
                    <Image
                      
                      src="https://i.imgur.com/GWkVhJO.jpg"
                    />
                  </Segment>
                  <h2>click the image to view more</h2>
                  <Grid.Row>
                    <Grid.Column>
                      <Segment>
                        <Grid columns={2}>
                          <Grid.Column>
                            <List.Item>
                              <h2>Start Date:</h2> <h3>09 12 12</h3>
                            </List.Item>
                          </Grid.Column>
                          <Grid.Column>
                            <h2>Finish Date:</h2> <h3>02 02 02</h3>
                          </Grid.Column>
                        </Grid>
                      </Segment>
                    </Grid.Column> */}

        {/* <Grid.Column>
                        <List.Item ><h4>Technologies:</h4> {project.client}</List.Item>
                    </Grid.Column> */}
        {/* <Grid.Column>
                        <List.Item ><h4>Role:</h4> {project.role}</List.Item>
                    </Grid.Column> */}
        {/* </Grid.Row>
                </Grid.Column>
                <Grid.Column width={5}>
                  {user ? (
                    <Link to={0}>
                      <h1 class="porjName">MyTiki</h1>
                    </Link>
                  ) : (
                    <h1 class="porjName">MyTiki</h1>
                  )}
                  <List.Item>
                    <h3>
                      "MyTiki" is an app that provides 10 classic tiki cocktail
                      recipes that are available to be viewed by any logged in
                      user. The user is also able to customize any of the
                      provided recipies and add them to their own "original
                      cocktails" folder, or create their own from scratch! The
                      user also has the ability to filter the shown cocktails by
                      keywords, and add any cocktails they wish to their
                      "favorites" folder.
                    </h3>
                  </List.Item>
                  <Segment>
                    <List.Item>
                      <h2>Technologies:</h2>{" "}
                      <h3>
                        Java OK KF DFKSDFKDFSDF SDF SDF SDF SD FSDF SDF SF SFD
                        SFD FD
                      </h3>
                    </List.Item>
                  </Segment>
                  <Grid.Row fluid>
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a href={0} target="_blank">
                        Front End
                      </a>
                    </h2>
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a href={`0`} target="_blank">
                        Back-end
                      </a>
                    </h2>

                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a href={0} target="_blank">
                        Deployed
                      </a>
                    </h2>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment> */}
      </>
    );
}

export default MyProjects