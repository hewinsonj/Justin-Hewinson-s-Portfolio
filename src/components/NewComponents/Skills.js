import { useNavigate, useParams } from "react-router-dom";
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

const Skills = () => {
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [bigMenu, setBigMenu] = React.useState(true);
  const [visible, setViz] = useState(false);

  useEffect(() => {
    handleToggleVisibility();
    updateDimensions();
    componentDidMount();
    componentWillUnmount();
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

  const handleToggleVisibility = () => {
    setViz((preViz) => (preViz = true));
  };

  return (
    <>
      {bigMenu ? (
        <Header as="h2" size="huge" icon inverted textAlign="center">
          <Icon name="clipboard list" size="huge" />
          Programming Languages & Development Tools
        </Header>
      ) : (
        <Header as="h2" size="large" icon inverted textAlign="center">
          <Icon name="clipboard list" size="huge" />
          Programming Languages & Development Tools
        </Header>
      )}

      {bigMenu ? (
        <Grid columns={2}>
          <Grid.Column padded floated="right" width={4}>
            <Grid.Row textAlign="center"></Grid.Row>
            <Segment>
              <h1 id="center">Development</h1>
              <List bulleted size="massive" divided>
                <ListItem>JavaScript</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>React</ListItem>
                <ListItem>OutSystems</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>HTML 5</ListItem>
                <ListItem>CSS 3</ListItem>
                <ListItem>JSON</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>Liquid</ListItem>
                <ListItem>Node</ListItem>
                <ListItem>Semantic UI</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>Django</ListItem>
                <ListItem>MongoDB</ListItem>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column padded width={4} floated="left">
            <Grid.Row inverted></Grid.Row>
            <Segment>
              <h1 id="center">Tools</h1>
              <List bulleted size="massive" divided>
                <ListItem>GitHub</ListItem>
                <ListItem>Postman</ListItem>
                <ListItem>Powershell</ListItem>
                <ListItem>Mongoose</ListItem>
                <ListItem>VS Code</ListItem>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      ) : (
        <Segment
          color="grey"
          inverted
          style={{
            border: "solid",
            bordercolor: "lightgrey",
          }}
        >
          <h1 id="center">Development</h1>
          <Grid columns={2} centered>
            <Grid.Column width={14}>
              <Segment centered>
                <Grid.Row centered>
                  <List bulleted size="huge" divided>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>Python</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>OutSystems</ListItem>
                    <ListItem>SQL</ListItem>
                    <ListItem>HTML 5</ListItem>
                    <ListItem>CSS 3</ListItem>
                    <ListItem>JSON</ListItem>
                    <ListItem>Express</ListItem>
                    <ListItem>Liquid</ListItem>
                    <ListItem>Node</ListItem>
                    <ListItem>Semantic UI</ListItem>
                    <ListItem>Bootstrap</ListItem>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>Django</ListItem>
                    <ListItem>MongoDB</ListItem>
                  </List>
                </Grid.Row>
              </Segment>
            </Grid.Column>
            <Grid.Column padded width={14}>
              <Grid.Row>
                <h1 id="center">Tools</h1>
              </Grid.Row>
              <Segment>
                <Grid.Row>
                  <List bulleted size="huge" divided>
                    <ListItem>GitHub</ListItem>
                    <ListItem>Postman</ListItem>
                    <ListItem>Powershell</ListItem>
                    <ListItem>Mongoose</ListItem>
                    <ListItem>VS Code</ListItem>
                  </List>
                </Grid.Row>
              </Segment>
            </Grid.Column>
          </Grid>
          <Divider/>
        </Segment>
        
      )}
    </>
  );
};

export default Skills;
