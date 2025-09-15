import React, { useEffect } from "react";
import {
  Segment,
  Grid,
  Icon,
  Header,
  List,
  Container,
  Divider,
} from "semantic-ui-react";

const Experience = () => {
  const [bigMenu, setBigMenu] = React.useState(true);

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

  const handleWindowBig = () => {
    setBigMenu(true);
  };
  const handleWindowSmall = () => {
    setBigMenu(false);
  };

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
          <Icon name="clock outline" size="huge" className="landingback" />
          Experience
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
          <Icon name="clock outline" size="huge" className="landingback" />
          Experience
        </Header>
      )}

      {bigMenu ? (
        <Segment
          color="grey"
          inverted
          padded
          style={{
            border: "solid",
            borderColor: "lightgrey",
          }}
        >
          <Grid stackable>
            <Divider hidden fitted></Divider>
            <Segment>
              <Container fluid textAlign="center">
                <h1
                  style={{
                    border: "outset",
                    borderColor: "lightgrey",
                    margin: "10px auto",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  The SOS Tiki Bar
                </h1>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <Grid.Row columns="equal" stretched textAlign="center">
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>Manager/Bartender</h2>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>Decatur, GA</h2>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>Nov 2021 - Current</h2>
                    </Grid.Column>
                  </Grid.Row>
                  <p style={{ textAlign: "left" }}>
                    Collaborated with a diverse team to develop creative,
                    efficient, and high-profit product. Delivered exceptional
                    customer service in a high-volume, fast-paced environment.
                    Managed customer expectations and feedback through a
                    personalized, customer-first approach
                  </p>
                </Grid>
              </List>
              <Divider></Divider>

              <Divider fitted></Divider>
              <h1
                style={{
                  border: "outset",
                  borderColor: "lightgrey",
                  margin: "10px auto",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                1910 Public House
              </h1>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <Grid.Row columns="equal" stretched textAlign="center">
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>Manager/Bartender</h2>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>Lilburn, GA</h2>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h2 style={{ margin: "0" }}>April 2018 - Nov 2021</h2>
                    </Grid.Column>
                  </Grid.Row>
                  <p style={{ textAlign: "left" }}>
                    Acquired extensive knowledge on 40+ cocktails and spirits.
                    Cross-trained and coordinated scheduling with a team of 12+.
                    Worked collaboratively to resolve issues ensuring customer
                    and staff retention
                  </p>
                </Grid>
              </List>
              <Divider></Divider>
            </Segment>
          </Grid>
        </Segment>
      ) : (
        <Segment
          color="grey"
          inverted
          style={{
            border: "solid",
            borderColor: "lightgrey",
          }}
        >
          <Grid stackable>
            <Divider hidden fitted></Divider>
            <Segment>
              <Container fluid textAlign="center">
                <h1
                  style={{
                    border: "outset",
                    borderColor: "lightgrey",
                    margin: "0",
                  }}
                >
                  The SOS Tiki Bar
                </h1>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <Grid.Row columns="equal" stretched textAlign="center">
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>Manager/Bartender</h3>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>Decatur, GA</h3>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>Nov 2021 - Current</h3>
                    </Grid.Column>
                  </Grid.Row>
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Collaborated with a diverse team to develop creative,
                    efficient, and high-profit product. Delivered exceptional
                    customer service in a high-volume, fast-paced environment.
                    Managed customer expectations and feedback through a
                    personalized, customer-first approach
                  </p>
                </Grid>
              </List>
              <Divider></Divider>

              <Divider fitted></Divider>
              <Container fluid textAlign="center">
                <h1
                  style={{
                    border: "outset",
                    borderColor: "lightgrey",
                    margin: "0",
                  }}
                >
                  1910 Public House
                </h1>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <Grid.Row columns="equal" stretched textAlign="center">
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>Manager/Bartender</h3>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>Lilburn, GA</h3>
                    </Grid.Column>
                    <Grid.Column mobile={16}>
                      <h3 style={{ margin: "0" }}>April 2018 - Nov 2021</h3>
                    </Grid.Column>
                  </Grid.Row>
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Acquired extensive knowledge on 40+ cocktails and spirits.
                    Cross-trained and coordinated scheduling with a team of 12+.
                    Worked collaboratively to resolve issues ensuring customer
                    and staff retention
                  </p>
                </Grid>
              </List>
              <Divider></Divider>
            </Segment>
          </Grid>
        </Segment>
      )}
    </>
  );
};

export default Experience;
