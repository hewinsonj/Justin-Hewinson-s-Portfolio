import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Segment,
  Grid,
  Feed,
  Icon,
  Image,
  Progress,
  List,
  Divider,
  Container,
  Modal,
} from "semantic-ui-react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import { updateProject } from "../../api/project";
import ProjectDetail from "../NewComponents/ProjectDetail";

const ProjectSegment = ({ project, msgAlert, user }) => {
  const [open, setOpen] = useState(false);
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
    console.log("handleBig happened", bigMenu);
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
    console.log("handleSmall happened", window.innerWidth, bigMenu);
  };

  componentDidMount();
  componentWillUnmount();

  const mobileProjJSX = (
    <ProjectDetail
      key={project.id}
      project={project}
      user={user}
      msgAlert={msgAlert}
    />
  );

  return (
    <Segment>
      {" "}
      {bigMenu ? (
        <Container fluid>
          <Grid columns={4} textAlign="center">
            <Grid.Row>
              <Grid.Column width={11} padded textAlign="center">
                <Segment>
                  <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    dimmer="blurring"
                    trigger={
                      <Image src={project.img1} size="massive" centered></Image>
                    }
                  >
                    <Modal.Content color="grey">
                      <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Row>
                          <Segment textAlign="center" color="grey" inverted>
                            <Image
                              spaced
                              src={project.img1}
                              size="massive"
                            ></Image>
                          </Segment>
                        </Grid.Row>
                        <Grid.Row>
                          <Segment textAlign="center" color="grey" inverted>
                            <Image
                              spaced
                              src={project.img2}
                              size="massive"
                            ></Image>
                          </Segment>
                        </Grid.Row>
                        <Grid.Row>
                          <Segment textAlign="center" color="grey" inverted>
                            <Image
                              spaced
                              src={project.img3}
                              size="massive"
                            ></Image>
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
                </Segment>
                <h2>click the image to view more</h2>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Grid columns={2}>
                        <Grid.Column>
                          <List.Item>
                            <h2>Start Date:</h2> <h3>{project.startDate} </h3>
                          </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                          <h2>Finish Date:</h2> <h3>{project.finishDate}</h3>
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={5}>
                {user ? (
                  <Link to={`./${project.id}`}>
                    <h1 class="porjName">{project.projTitle}</h1>
                  </Link>
                ) : (
                  <h1 class="porjName">{project.projTitle}</h1>
                )}
                <List.Item>
                  <h3>{project.description}</h3>
                </List.Item>
                <Segment>
                  <List.Item>
                    <h2>Technologies:</h2> <h3>{project.client}</h3>
                  </List.Item>
                </Segment>
                <Grid.Row fluid>
                  <h2>
                    {" "}
                    <Icon name="caret right" />
                    <a href={`${project.link1}`} target="_blank">
                      {project.link2.length > 1 ? "Front-end" : "Repository"}
                    </a>
                  </h2>
                  {project.link2.length > 1 ? (
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a href={`${project.link2}`} target="_blank">
                        Back-end
                      </a>
                    </h2>
                  ) : null}

                  {project.link3 ? (
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a href={`${project.link3}`} target="_blank">
                        Deployed
                      </a>
                    </h2>
                  ) : null}
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      ) : (
        { mobileProjJSX }
      )}
    </Segment>
  );
};

export default ProjectSegment;
