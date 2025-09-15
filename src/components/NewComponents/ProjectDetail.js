import { Link, useNavigate, useParams } from "react-router-dom";
import { getProject } from "../../api/project";
import {
  Button,
  Segment,
  Grid,
  Icon,
  Image,
  Modal,
  Header,
  List,
  Container,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";

const ProjectDetail = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const [bigMenu, setBigMenu] = React.useState(true);
  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1536) {
        handleWindowBig();
        navigate(`/projects`);
      } else {
        handleWindowSmall();
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    getProject(projectId).then((res) => {
      setProject(res.data.project);
      console.log("project is got!!!!!!");
    });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("load", updateDimensions);
    };
  }, [navigate, projectId]);

  const handleWindowBig = () => setBigMenu(true);
  const handleWindowSmall = () => setBigMenu(false);

  console.log(project.name, "this is the projecto!!____");
  return (
    <>
      <Header as="h2" size="big" icon inverted textAlign="center">
        <Link to={`/projects`} className="whiteWords">
          <Icon name="database" size="big" />
          Projects
        </Link>
      </Header>

      {bigMenu ? (
        <Grid columns={2}>BIGMENU PROJ DETAIL</Grid>
      ) : (
        <Segment
          color="b"
          inverted
          style={{
            border: "solid",
            borderColor: "lightgrey",
          }}
        >
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
                  <a href={`${project.link1}`} target="_blank" rel="noreferrer">
                    {project.link2 ? "Front-end" : "Repository"}
                  </a>
                </h2>
              </List.Item>
              {project.link2 ? (
                <List.Item>
                  <h2>
                    <Icon name="caret right" />
                    <a href={`${project.link2}`} target="_blank" rel="noreferrer">
                      {project.link3 ? "Back-End" : "Deployed"}
                    </a>
                  </h2>
                </List.Item>
              ) : null}

              {project.link3 ? (
                <List.Item>
                  <h2>
                    <Icon name="caret right" />
                    <a href={`${project.link3}`} target="_blank" rel="noreferrer">
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
