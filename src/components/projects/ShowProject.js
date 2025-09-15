import React, { useEffect, useState } from "react";
import { Button, Segment, Grid, Modal } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, deleteProject } from "../../api/project";
import UpdateProjectModal from "./UpdateProjectModal";
import LoadingScreen from "../shared/LoadingPage";
import CreateNote from "../notes/CreateNote";
import NotesModal from "../notes/NotesModal";

const ShowProject = ({ user, msgAlert }) => {
  const [project, setProject] = useState({});
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();
  const [noteModalShow, setNoteModalShow] = useState(false);

  const { projectId } = useParams();

  useEffect(() => {
    getProject(projectId)
      .then((res) => {
        setProject(res.data.project);
      })
      .catch((error) => {
        msgAlert({
          heading: "Failure",
          message: "Show Projects failed" + error,
          variant: "danger",
        });
      });
  }, [updated, projectId, msgAlert]);

  const handleDeleteProject = () => {
    deleteProject(user, projectId)
      .then(() => {
        msgAlert({
          heading: "Success",
          message: "Deleting a Project",
          variant: "success",
        });
      })
      .then(() => {
        navigate(`/feed-page/${user._id}`);
      })
      .catch((error) => {
        msgAlert({
          heading: "Failure",
          message: "Deleting a Project Failure" + error,
          variant: "danger",
        });
      });
  };

  if (!project) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Segment inverted color="yellow" verticalAlign="middle" id="segment">
        <Segment>
          <Grid columns={2} padded>
            <Grid.Column verticalAlign="middle">
              <h2>{project.projTitle} </h2>
            </Grid.Column>
            <Grid.Column
              verticalAlign="middle"
              textAlign="center"
              centered
            ></Grid.Column>
          </Grid>
        </Segment>
        <Segment inverted color="yellow" className="capitalize-me">
          <Grid centered stretched>
            <Grid.Row padded>
              <Segment fluid>
                <Grid columns={5}>
                  <Grid.Column>
                    <h2>{project.img1}</h2>
                    <h2>{project.img2}</h2>
                    <h2>{project.img3}</h2>
                  </Grid.Column>
                  <Grid.Column>
                    <h3>Description: </h3>
                    <h3>{project.description}</h3>
                  </Grid.Column>
                  <Grid.Column>
                    <h3>finishDate: </h3>
                    <h3>{project.finishDate}</h3>
                    <h3>startDate: </h3>
                    <h3>{project.startDate}</h3>
                  </Grid.Column>
                  <Grid.Column>
                    <h3>Link1: </h3>
                    <h3>{project.link1}</h3>
                    <h3>Link2: </h3>
                    <h3>{project.link2}</h3>
                    <h3>Link3: </h3>
                    <h3>{project.link3}</h3>
                  </Grid.Column>
                  <Grid.Column>
                    <h3>Role: </h3>
                    <h3>{project.role}</h3>
                    <h3>Technologies: </h3>
                    <h3>{project.client}</h3>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid padded centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Modal
                onClose={() => setNoteModalShow(false)}
                onOpen={() => setNoteModalShow(true)}
                open={noteModalShow}
                trigger={
                  <Button size="large" variant="warning">
                    Leave Feedback
                  </Button>
                }
              >
                <Modal.Content>
                  <Segment
                    padded="very"
                    inverted
                    color="yellow"
                    verticalAlign="middle"
                    id="segment"
                  >
                    <CreateNote
                      user={user}
                      msgAlert={msgAlert}
                      project={project}
                      triggerRefresh={() => setUpdated((prev) => !prev)}
                      setNoteModalShow={setNoteModalShow}
                    />
                  </Segment>

                  <Modal.Actions>
                    <Button
                      color="black"
                      onClick={() => setNoteModalShow(false)}
                    >
                      Go Back
                    </Button>
                  </Modal.Actions>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column>
              <NotesModal user={user} msgAlert={msgAlert} project={project} />
            </Grid.Column>
            <Grid.Column textAlign="middle">
              <UpdateProjectModal
                project={project}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated((prev) => !prev)}
              />
            </Grid.Column>
            <Grid.Column textAlign="middle">
              <Button onClick={() => handleDeleteProject()}>Delete</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default ShowProject;
