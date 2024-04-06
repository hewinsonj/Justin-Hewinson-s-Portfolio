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

const Education = () => {
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
    // triggerRefresh();
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

  return (
    <>
      {bigMenu ? (
        <Header as="h2" size="huge" icon inverted textAlign="center">
          <Icon
            name="graduation cap"
            size="huge"
            // onClick={handleTriggerRefresh}
          />
          Education
        </Header>
      ) : (
        <Header as="h2" size="large" icon inverted textAlign="center">
          <Icon
            name="graduation cap"
            size="huge"
            // onClick={handleTriggerRefresh}
          />
          Education
        </Header>
      )}

      {bigMenu ? (
        <Segment
          color="grey"
          inverted
          padded
          style={{
            border: "solid",
            bordercolor: "lightgrey",
          }}
        >
          <Grid
            //   columns={2}
            centered
            stackable
          >
            <Divider hidden fitted></Divider>
            <Segment padded>
              <Container fluid textAlign="center">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image
                      src="https://i.imgur.com/eQLhUPV.jpg"
                      size="small"
                      padded={false}
                      // floated="right"
                      wrapped
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <h1
                      style={{
                        border: "outset",
                        bordercolor: "lightgrey",
                        margin: "0",
                        // paddingright: "20vw",
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
                  <h2
                    style={
                      {
                        //   textAlign: "left",
                      }
                    }
                  >
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
                  bordercolor: "lightgrey",
                  margin: "1px, 0, 2px,0",
                  paddingright: "20vw",
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
                      textalign: "center",
                      justifycontent: "center",
                    }}
                  >
                    <h1>Business Management Major</h1> 2010 - 2011 Classes
                    included Macro-Economics and General Business Management
                  </h2>
                </Grid>
              </List>
              {/* </Grid.Row> */}
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
            bordercolor: "lightgrey",
          }}
        >
          <Grid
            //   columns={2}
            centered
            stackable
          >
            <Divider hidden fitted></Divider>
            <Segment>
              <Container fluid textAlign="center">
                <Image
                  src="https://i.imgur.com/eQLhUPV.jpg"
                  size="tiny"
                  padded={false}
                  // floated="right"
                  wrapped
                />
                <h1
                  style={{
                    border: "outset",
                    bordercolor: "lightgrey",
                    margin: "0",
                    paddingright: "20vw",
                  }}
                >
                  General Assembly
                </h1>
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <p
                    style={
                      {
                        //   textAlign: "left",
                      }
                    }
                  >
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
                  bordercolor: "lightgrey",
                  margin: "1px, 0, 2px,0",
                  paddingright: "20vw",
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
              {/* </Grid.Row> */}
            </Segment>
            <Divider hidden fitted />
          </Grid>
        </Segment>
      )}
    </>
  );
};

export default Education;
