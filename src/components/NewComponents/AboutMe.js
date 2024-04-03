import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
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
  Transition,
  Divider,
  HeaderSubheader,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Message,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingPage";

const AboutMe = () => {
  const [visible, setViz] = useState(false);
  const [card1Viz, setcard1Viz] = useState(false);
  const [card2Viz, setcard2Viz] = useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [bigMenu, setBigMenu] = React.useState(true);

  useEffect(() => {
      handleToggleVisibility();
      updateDimensions();
    componentDidMount();
    componentWillUnmount();
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
    console.log("right her her");
    if (window.innerWidth > 1536) {
      handleWindowBig();
      console.log("right herBIG");
    } else {
      handleWindowSmall();
      console.log("right herSMALL");
    }
  };

  const handleWindowBig = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = true));
    console.log("handleBig happened");
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
    console.log("handleSmall happened");
  };

  const handleToggleVisibility = () => {
    //   setViz((visible ? visible = true: visible = true)
    setViz((preViz) => (preViz = true));
    console.log("VIZ TOGGLE");
  };

  const handleToggleVisibilityCard1 = () => {
    //   setViz((visible ? visible = true: visible = true)
    if (bigMenu) {
      setcard1Viz((preViz) => (preViz = true));
    } else {
      setcard2Viz((preViz) => (preViz = true));
      console.log("Workin!");
    }
  };

  const handleToggleInvisibility = () => {
    //   setViz((visible ? visible = true: visible = true)
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard1();
    console.log("VIZ TOGGLE");
  };

  return (
    <>
      <Grid columns={2} centered container>
        <Grid.Row>
          {/* <Segment textAlign="center" padded>
            <h1 class="oswald projName">About me</h1>
          </Segment> */}
          <Divider hidden />
          <Transition visible={card1Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/9yHemjS.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9} >
                      <Message >
                        <Message.Header padded>
                          <h1>Summary of Me</h1>
                        </Message.Header>
                        <Divider/>
                        <Message.Content>
                          <h2>
                            My name is Justin Hewinson and I am a self-driven
                            Fullstack Software Engineer and Game Developer
                            focused on problem-solving with creative solutions
                            and creating unique user experiences that are both
                            intuitive and effective. My 20+ years of combined
                            experience as an audio engineer and a service
                            industry professional give me the ability to adapt
                            to new/consistently changing software and
                            technologies, strong communication skills and
                            self-motivated drive that are a crucial asset for
                            any industry.
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card2Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid>
                <Segment
                  inverted
                  style={{
                    border: "solid",
                    bordercolor: "light grey",
                  }}
                >
                  <Grid centered>
                    <Grid.Row>
                      <Image
                        size="medium"
                        src="https://i.imgur.com/9yHemjS.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Summary of Me</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            My name is Justin Hewinson and I am a self-driven
                            Fullstack Software Engineer and Game Developer
                            focused on problem-solving with creative solutions
                            and creating unique user experiences that are both
                            intuitive and effective. My 20+ years of combined
                            experience as an audio engineer and a service
                            industry professional give me the ability to adapt
                            to new/consistently changing software and
                            technologies, strong communication skills and
                            self-motivated drive that are a crucial asset for
                            any industry.
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={visible} animation="scale" duration={1000}>
            <Header as="h2" size="huge" icon inverted>
              <Icon name="user outline" size="huge" />
              About Me
              <HeaderSubheader></HeaderSubheader>
            </Header>
          </Transition>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Grid.Row padded>
              <Divider hidden />
              <Transition visible={visible} animation="scale" duration={1000}>
                <Card onClick={handleToggleInvisibility} centered>
                  <Image
                    src="https://i.imgur.com/fFEjwMs.jpg"
                    wrapped
                    ui={false}
                  />

                  <CardContent extra>
                    <a>
                      <Icon name="user" />
                      Summary
                    </a>
                  </CardContent>
                </Card>
              </Transition>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              <Divider hidden />
              <Transition visible={visible} animation="scale" duration={1000}>
                {/* <Segment
                style={{
                  border: "solid",
                  bordercolor: "black",
                  margin: 2,
                  padding: 2,
                }}
                padded
                vertical
              > */}
                <Card
                  onClick={handleToggleInvisibility}
                  centered
                  href="#card-example-link-card"
                >
                  <Image
                    src="https://i.imgur.com/fFEjwMs.jpg"
                    wrapped
                    ui={false}
                  />

                  <CardContent extra>
                    <a>
                      <Icon name="user" />
                      Software Engineer
                    </a>
                  </CardContent>
                </Card>
                {/* </Segment> */}
              </Transition>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Grid.Row padded>
              <Divider hidden />
              <Transition visible={visible} animation="scale" duration={1000}>
                {/* <Segment
                style={{
                  border: "solid",
                  bordercolor: "black",
                  margin: 2,
                  padding: 2,
                }}
              ></Segment> */}
                <Card onClick={handleToggleInvisibility} centered>
                  <Image
                    src="https://i.imgur.com/fFEjwMs.jpg"
                    wrapped
                    ui={false}
                  />

                  <CardContent extra>
                    <a>
                      <Icon name="user" />
                      Personality
                    </a>
                  </CardContent>
                </Card>
              </Transition>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Divider hidden />
              <Transition visible={visible} animation="scale" duration={1000}>
                {/* <Segment
                style={{
                  border: "solid",
                  bordercolor: "black",
                  margin: 2,
                  padding: 2,
                }}
                padded
                vertical
              > */}
                <Card onClick={handleToggleInvisibility} centered>
                  <Image
                    src="https://i.imgur.com/fFEjwMs.jpg"
                    wrapped
                    ui={false}
                  />

                  <CardContent extra>
                    <a>
                      <Icon name="user" />
                      Software Engineer
                    </a>
                  </CardContent>
                </Card>
                {/* </Segment> */}
              </Transition>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default AboutMe;
