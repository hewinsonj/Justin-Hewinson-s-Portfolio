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

const Experience = () => {
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
            name="clock outline"
            size="huge"
            // onClick={handleTriggerRefresh}
          />
          Experience
        </Header>
      ) : (
        <Header as="h2" size="large" icon inverted textAlign="center">
          <Icon
            name="clock outline"
            size="huge"
            // onClick={handleTriggerRefresh}
          />
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
            bordercolor: "lightgrey",
          }}
        >
          <Grid
            //   columns={2}
            centered
            stackable
          >
            <Divider hidden fitted></Divider>
            {/* <Grid.Column width={14}> */}
            <Segment>
              <Container fluid textAlign="center">
                <h1
                  style={{
                    border: "outset",
                    bordercolor: "lightgrey",
                    margin: "0",
                    paddingright: "20vw",
                  }}
                >
                  The SOS Tiki Bar
                </h1>
                {/* </Grid.Column> */}
                {/* </Grid> */}
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Manager/Bartender
                  </h2>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Decatur, GA
                  </h2>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Nov 2021 - Current
                  </h2>

                  <h2
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Collaborated with a diverse team to develop creative,
                    efficient, and high-profit product. Delivered exceptional
                    customer service in a high-volume, fast-paced environment.
                    Managed customer expectations and feedback through a
                    personalized, customer-first approach
                  </h2>
                </Grid>
              </List>
              <Divider></Divider>

              <Divider fitted></Divider>
              <h1
                style={{
                  border: "outset",
                  bordercolor: "lightgrey",
                  margin: "0",
                }}
              >
                1910 Public House
              </h1>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Manager/Bartender
                  </h2>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Lilburn, GA
                  </h2>
                  <h2
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    April 2018 - Nov 2021
                  </h2>

                  <h2
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Acquired extensive knowledge on 40+ cocktails and spirits.
                    Cross-trained and coordinated scheduling with a team of 12+.
                    Worked collaboratively to resolve issues ensuring customer
                    and staff retention
                  </h2>
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
            bordercolor: "lightgrey",
          }}
        >
          <Grid
            //   columns={2}
            centered
            stackable
          >
            <Divider hidden fitted></Divider>
            {/* <Grid.Column width={14}> */}
            <Segment>
              <Container fluid textAlign="center">
                <h1
                  style={{
                    border: "outset",
                    bordercolor: "lightgrey",
                    margin: "0",
                    paddingright: "20vw",
                  }}
                >
                  The SOS Tiki Bar
                </h1>
                {/* </Grid.Column> */}
                {/* </Grid> */}
              </Container>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Manager/Bartender
                  </h3>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Decatur, GA
                  </h3>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Nov 2021 - Current
                  </h3>

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
              <h1
                style={{
                  border: "outset",
                  bordercolor: "lightgrey",
                  margin: "0",
                }}
              >
                1910 Public House
              </h1>
              <Divider></Divider>
              <List bulleted size="huge" divided>
                <Divider hidden fitted></Divider>
                <Grid padded>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Manager/Bartender
                  </h3>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    Lilburn, GA
                  </h3>
                  <h3
                    style={{
                      margin: "3px 0 3px 0",
                    }}
                  >
                    April 2018 - Nov 2021
                  </h3>

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
