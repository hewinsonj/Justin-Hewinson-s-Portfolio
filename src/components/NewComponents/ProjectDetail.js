import { Link, useNavigate, useParams } from "react-router-dom";
import { getProject} from "../../api/project";
import {
  Button,
  Segment,
  Grid,
  Label,
  Icon,
  Image,
  Modal,
  Header,
  List,
  GridRow,
  Container,
  ListItem,
  ListList,
  Divider,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingPage";

const ProjectDetail = ({user}) => {
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [bigMenu, setBigMenu] = React.useState(true);
  const [visible, setViz] = useState(false);
  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    handleToggleVisibility();
    updateDimensions();
    componentDidMount();
    componentWillUnmount();
    // triggerRefresh();
    getProject(projectId)
         .then((res) => {
           setProject(res.data.project);
           console.log("project is got!!!!!!");
         })
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
    // console.log("right her her");
    if (window.innerWidth > 1536) {
      handleWindowBig();
      
        navigate(`/projects`)
      
      //   console.log("right herBIG");
    } else {
      handleWindowSmall();
      //   console.log("right herSMALL");
    }
  };

  const handleWindowBig = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = true));
    // console.log("handleBig happened");
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
    // console.log("handleSmall happened");
  };

  const handleToggleVisibility = () => {
    setViz((preViz) => (preViz = true));
    // console.log("VIZ TOGGLE");
  };

  console.log(project.name, "this is the projecto!!____")
  return (
    <>
      <Header as="h2" size="big" icon inverted textAlign="center">
        <Link to={`/projects`} className="whiteWords">
          <Icon
            name="database"
            size="big"
            // onClick={handleTriggerRefresh}
          />
          Projects
        </Link>
      </Header>
      {/* <Container floated='right'>
        <Button>
          Projects
        </Button> 
      </Container> */}
      {bigMenu ? (
        <Grid columns={2}>BIGMENU PROJ DETAIL</Grid>
      ) : (
        <Segment
          color="b"
          inverted
          style={{
            border: "solid",
            bordercolor: "lightgrey",
          }}
        >
          {/* <Image src="https://i.imgur.com/GWkVhJO.jpg" /> */}
          <Header as="h2" size="big" icon inverted textAlign="center">
            {project.projTitle}
          </Header>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            dimmer="blurring"
            trigger={<Image src={project.img1} size="massive" centered></Image>}
          >
            <Modal.Content color="grey">
              <Grid textAlign="center" verticalAlign="middle">
                <Grid.Row>
                  <Segment textAlign="center" color="grey" inverted>
                    <Image spaced src={project.img1} size="massive"></Image>
                  </Segment>
                </Grid.Row>
                <Grid.Row>
                  <Segment textAlign="center" color="grey" inverted>
                    <Image spaced src={project.img2} size="massive"></Image>
                  </Segment>
                </Grid.Row>
                <Grid.Row>
                  <Segment textAlign="center" color="grey" inverted>
                    <Image spaced src={project.img3} size="massive"></Image>
                  </Segment>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Button
                      onClick={() => setOpen(false)}
                      color="red"
                      floated="right"
                      circular
                      size="large"
                    >
                      Close
                    </Button>
                  </div>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
          <Container textAlign="center">
            <p>click the image to view more</p>
          </Container>
          <Segment>
            <p>{project.description}</p>
          </Segment>
          <Segment>
            <Grid padded>
              <Header floated="left"> Technologies</Header>
              {project.client}
            </Grid>
          </Segment>
          <Segment>
            <List divided>
              <List.Item>
                <h2>
                  <Icon name="caret right" />
                  <a href={`${project.link1}`} target="_blank">
                    {project.link2 ? "Front-end" : "Repository"}
                  </a>
                </h2>
              </List.Item>
              {project.link2 ? (
                <List.Item>
                  <h2>
                    <Icon name="caret right" />
                    <a href={`${project.link2}`} target="_blank">
                      {project.link3 ? "Back-End" : "Deployed"}
                    </a>
                  </h2>
                </List.Item>
              ) : null}

              {project.link3 ? (
                <List.Item>
                  <h2>
                    <Icon name="caret right" />
                    <a href={`${project.link3}`} target="_blank">
                      Deployed
                    </a>
                  </h2>
                </List.Item>
              ) : null}
            </List>
          </Segment>
        </Segment>
      )}
    </>
  );
};

export default ProjectDetail;
