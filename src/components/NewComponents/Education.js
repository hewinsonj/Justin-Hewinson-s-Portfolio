import React, { useState, useEffect } from "react";
import {
  Segment,
  Grid,
  Icon,
  Image,
  Header,
  List,
  Container,
  ListItem,
  Divider,
} from "semantic-ui-react";

const Education = () => {
  const [bigMenu, setBigMenu] = useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1536) {
        setBigMenu(true);
      } else {
        setBigMenu(false);
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
          <Icon name="graduation cap" size="huge" className="landingback" />
          Education
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
          <Icon name="graduation cap" size="huge" className="landingback" />
          Education
        </Header>
      )}

      {bigMenu ? (
        <Segment
          color="grey"
          inverted
          style={{
            border: "solid",
            borderColor: "lightgrey",
            padding: "1rem",
          }}
        >
          <Grid centered stackable>
            <Divider hidden fitted></Divider>
            <Segment style={{ padding: "1rem" }}>
              <Container fluid textAlign="center">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image
                      src="https://i.imgur.com/eQLhUPV.jpg"
                      size="small"
                      wrapped
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <h1
                      style={{
                        border: "outset",
                        borderColor: "lightgrey",
                        margin: "10px auto",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      General Assembly
                    </h1>
                  </Grid.Column>
                  {/* </Grid.Column> */}
                  {/* </Grid> */}
                </Grid.Row>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <h2>
                    Completed 2022 - Full-Stack software engineering immersive
                    student in an intensive, 24-week, 450+ hour program focused
                    on product development fundamentals, object-oriented
                    programming, MVC frameworks, data modeling, and team
                    collaboration strategies
                  </h2>
                </Grid>
              </List>
              <Divider></Divider>

              <Image
                src="https://i.imgur.com/mukY95A.png"
                size="small"
                wrapped
              />
              <h1
                style={{
                  border: "outset",
                  borderColor: "lightgrey",
                  margin: "10px auto",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Gwinnett Technical College
              </h1>

              <Divider fitted></Divider>
              <List size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded centered textAlign="center">
                  <h2
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <strong>Business Management Major</strong> — 2010 - 2011.
                    Classes included Macro-Economics and General Business
                    Management
                  </h2>
                </Grid>
              </List>
            </Segment>
            <Divider hidden fitted />
          </Grid>
        </Segment>
      ) : (
        <Segment
          color="grey"
          inverted
          style={{
            border: "solid",
            borderColor: "lightgrey",
            padding: "1rem",
          }}
        >
          <Grid centered stackable>
            <Divider hidden fitted></Divider>
            <Segment style={{ padding: "1rem" }}>
              <Container fluid textAlign="center">
                <Image
                  src="https://i.imgur.com/eQLhUPV.jpg"
                  size="tiny"
                  wrapped
                />
                <h1
                  style={{
                    border: "outset",
                    borderColor: "lightgrey",
                    margin: "10px auto",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  General Assembly
                </h1>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <p>
                    Completed 2022 - Full-Stack software engineering immersive
                    student in an intensive, 24-week, 450+ hour program focused
                    on product development fundamentals, object-oriented
                    programming, MVC frameworks, data modeling, and team
                    collaboration strategies
                  </p>
                </Grid>
              </List>
              <Divider></Divider>

              <Image
                src="https://i.imgur.com/mukY95A.png"
                size="small"
                wrapped
              />
              <h1
                style={{
                  border: "outset",
                  borderColor: "lightgrey",
                  margin: "10px auto",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Gwinnett Technical College
              </h1>
              <Divider fitted></Divider>
              <List size="huge" divided>
                <ListItem as={"h2"}>Business Management</ListItem>
                <Divider hidden fitted></Divider>
                <Grid padded centered>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    2010 - 2011 Classes included Macro-Economics and General
                    Business Management
                  </p>
                </Grid>
              </List>
            </Segment>
            <Divider hidden fitted />
          </Grid>
        </Segment>
      )}
    </>
  );
};

export default Education;
