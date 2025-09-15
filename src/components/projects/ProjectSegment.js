import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Segment,
  Grid,
  Icon,
  Image,
  List,
  Container,
  Modal,
} from "semantic-ui-react";
import ProjectDetail from "../NewComponents/ProjectDetail";

const ProjectSegment = ({ project, msgAlert, user }) => {
  const [open, setOpen] = useState(false);
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
              <Grid.Column width={11} textAlign="center">
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
                    <h1 className="porjName">{project.projTitle}</h1>
                  </Link>
                ) : (
                  <h1 className="porjName">{project.projTitle}</h1>
                )}
                <List.Item>
                  <h3>{project.description}</h3>
                </List.Item>
                <Segment>
                  <List.Item>
                    <h2>Technologies:</h2> <h3>{project.client}</h3>
                  </List.Item>
                </Segment>
                <Grid.Row>
                  <h2>
                    {" "}
                    <Icon name="caret right" />
                    <a
                      href={`${project.link1}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link2.length > 1 ? "Front-end" : "Repository"}
                    </a>
                  </h2>
                  {project.link2.length > 1 ? (
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a
                        href={`${project.link2}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Back-end
                      </a>
                    </h2>
                  ) : null}

                  {project.link3 ? (
                    <h2>
                      {" "}
                      <Icon name="caret right" />
                      <a
                        href={`${project.link3}`}
                        target="_blank"
                        rel="noreferrer"
                      >
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
        mobileProjJSX
      )}
    </Segment>
  );
};

export default ProjectSegment;
