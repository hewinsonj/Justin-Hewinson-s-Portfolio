import React, { useState, useEffect } from "react";
import {
  Segment,
  Grid,
  Icon,
  Header,
  List,
  ListItem,
  Divider,
} from "semantic-ui-react";

const Skills = () => {
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

  return (
    <>
      {bigMenu ? (
        <Header
          as="h2"
          size="huge"
          icon
          inverted
          textAlign="center"
          className="landingback"
        >
          <Icon name="clipboard list" size="huge" className="landingback" />
          Programming Languages & Development Tools
        </Header>
      ) : (
        <Header
          as="h2"
          size="large"
          icon
          inverted
          textAlign="center"
          className="landingback"
        >
          <Icon name="clipboard list" size="huge" className="landingback" />
          Programming Languages & Development Tools
        </Header>
      )}

      {bigMenu ? (
        <Grid columns={2}>
          <Grid.Column floated="right" width={4}>
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
          <Grid.Column width={4} floated="left">
            <Grid.Row></Grid.Row>
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
            borderColor: "lightgrey",
          }}
        >
          <h1 id="center">Development</h1>
          <Grid columns={2} centered>
            <Grid.Column width={14}>
              <Segment>
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
            <Grid.Column width={14}>
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
          <Divider />
        </Segment>
      )}
    </>
  );
};

export default Skills;
