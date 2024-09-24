import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingPage";
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

const AboutMe = (triggerRefresh, msgAlert) => {
  const [visible, setViz] = useState(false);
  const [card1Viz, setcard1Viz] = useState(false);
  const [card2Viz, setcard2Viz] = useState(false);
  const [card3Viz, setcard3Viz] = useState(false);
  const [card4Viz, setcard4Viz] = useState(false);
  const [card5Viz, setcard5Viz] = useState(false);
  const [card6Viz, setcard6Viz] = useState(false);
  const [card7Viz, setcard7Viz] = useState(false);
  const [card8Viz, setcard8Viz] = useState(false);
  const [card9Viz, setcard9Viz] = useState(false);
  const [card10Viz, setcard10Viz] = useState(false);
  const [card11Viz, setcard11Viz] = useState(false);
  const [card12Viz, setcard12Viz] = useState(false);
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

  // Functions that trigger the fade-in effect of the AboutMe detail cards, and decides which layout to use based on wheather or not the window size is greater than 1536px

  const handleToggleVisibilityCard1 = () => {
    if (bigMenu) {
      setcard1Viz((preViz) => (preViz = true));
    } else {
      setcard2Viz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard3 = () => {
    if (bigMenu) {
      setcard3Viz((preViz) => (preViz = true));
    } else {
      setcard4Viz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard5 = () => {
    if (bigMenu) {
      setcard5Viz((preViz) => (preViz = true));
    } else {
      setcard6Viz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard7 = () => {
    if (bigMenu) {
      setcard7Viz((preViz) => (preViz = true));
    } else {
      setcard8Viz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard9 = () => {
    if (bigMenu) {
      setcard9Viz((preViz) => (preViz = true));
    } else {
      setcard10Viz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard11 = () => {
    if (bigMenu) {
      setcard11Viz((preViz) => (preViz = true));
    } else {
      setcard12Viz((preViz) => (preViz = true));
    }
  };

  // Functions that trigger the fade-out effect of the AboutMe detail cards and the fade-in effect of the main AboutMe cards

  const handleToggleVisibilityCard1A = () => {
    if (bigMenu) {
      setcard1Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard2Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));

      console.log("WorkinFalse!");
    }
  };

  const handleToggleVisibilityCard3A = () => {
    if (bigMenu) {
      setcard3Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard4Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard5A = () => {
    if (bigMenu) {
      setcard5Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard6Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard7A = () => {
    if (bigMenu) {
      setcard7Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard8Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard9A = () => {
    if (bigMenu) {
      setcard9Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard10Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));
    }
  };

  const handleToggleVisibilityCard11A = () => {
    if (bigMenu) {
      setcard11Viz((preViz) => (preViz = false));
      setViz((preViz) => (preViz = true));
    } else {
      setcard12Viz((preViz2) => (preViz2 = false));
      setViz((preViz) => (preViz = true));
    }
  };

  // Functions trigger the fade-out transitions of the main cards

  const handleToggleInvisibility = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard1();
  };

  const handleToggleInvisibility3 = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard3();
  };
  const handleToggleInvisibility5 = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard5();
  };
  const handleToggleInvisibility7 = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard7();
  };

  const handleToggleInvisibility9 = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard9();
  };

  const handleToggleInvisibility11 = () => {
    setViz((preViz) => (preViz = false));
    handleToggleVisibilityCard11();
  };

  return (
    <>
      <Divider hidden />
      {visible ? null : (
        <Grid columns={2} centered container>
          <Transition visible={card1Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard1A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/fFEjwMs.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Summary of Me</h1>
                        </Message.Header>
                        <Divider />
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
              <Container fluid onClick={handleToggleVisibilityCard1A}>
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
                        src="https://i.imgur.com/fFEjwMs.jpg"
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

          <Transition visible={card3Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard3A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/kPyrE4S.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Software Engineer</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            Learning to code has given me the ability to combine
                            and utilize my skills gained through previous life
                            experiences and create applications that fill the
                            needs I see unmet in the world around me
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card4Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard3A}>
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
                        src="https://i.imgur.com/kPyrE4S.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Software Engineer</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            Learning to code has given me the ability to combine
                            and utilize my skills gained through previous life
                            experiences and create applications that fill the
                            needs I see unmet in the world around me
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>

          <Transition visible={card5Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard5A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/yeyQ0aa.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Musician</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            Being a musician has pushed me to learn how to use
                            more types of equipment and technologies than I can
                            ever hope to quantify. What started out as a
                            necessity to teach myself these various tools has
                            turned into a hunger to explore and understand the
                            way things work around me. The skills of being able
                            to communicate clearly and effectively and work on
                            multiple tasks at once have become invaluable to me
                            in many aspects of my life and I'm excited to put
                            these skills to use as I further my software
                            engineering career.
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card6Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard5A}>
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
                        src="https://i.imgur.com/yeyQ0aa.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Musician</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            Being a musician has pushed me to learn how to use
                            more types of equipment and technologies than I can
                            ever hope to quantify. What started out as a
                            necessity to teach myself these various tools has
                            turned into a hunger to explore and understand the
                            way things work around me. The skills of being able
                            to communicate clearly and effectively and work on
                            multiple tasks at once have become invaluable to me
                            in many aspects of my life and I'm excited to put
                            these skills to use as I further my software
                            engineering career.
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>

          <Transition visible={card7Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard7A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/CIfphyK.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Handy Man</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            Completing minor/major renovations on my house over
                            the years (like remodeling the bathroom you see
                            here) has given me a profound respect for trusting
                            the process and measuring twice to cut once
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card8Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard7A}>
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
                        src="https://i.imgur.com/CIfphyK.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Handy Man</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            Completing minor/major renovations on my house over
                            the years (like remodeling the bathroom you see
                            here) has given me a profound respect for trusting
                            the process and measuring twice to cut once
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>

          <Transition visible={card9Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard9A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/Jum8hGP.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Bartender</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            The service industry fostered strong work ethic and
                            the ability to communicate clearly and work
                            cohesively with a large team
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card10Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard9A}>
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
                        src="https://i.imgur.com/Jum8hGP.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Bartender</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            The service industry fostered strong work ethic and
                            the ability to communicate clearly and work
                            cohesively with a large team
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>

          <Transition visible={card11Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard11A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/y62LjRD.png"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Gamer</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            Games have taught me crucial ways of problem solving
                            and have been a big motivation for learning to code
                            and create unique user experiences
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card12Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard11A}>
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
                        src="https://i.imgur.com/y62LjRD.png"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Gamer</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            Games have taught me crucial ways of problem solving
                            and have been a big motivation for learning to code
                            and create unique user experiences
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
        </Grid>
      )}

      {visible ? (
        <Grid columns={2} centered container>
          {/*------------------------------MAIN AREA-----------------------------------  */}
          <Grid.Row>
            <Transition visible={visible} animation="scale" duration={1000}>
              {bigMenu ? (
                <Header as="h2" size="huge" icon inverted>
                  <Icon
                    name="user outline"
                    size="huge"
                  />
                  About Me
                </Header>
              ) : (
                <Header as="h2" size="large" icon inverted>
                  <Icon
                    name="user outline"
                    size="huge"
                  />
                  About Me
                </Header>
              )}
            </Transition>
          </Grid.Row>

          <Grid.Row style={{ margin: "0, 0, 0, 0" }}>
            <Grid.Column>
              <Grid.Row>
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
                <Transition visible={visible} animation="scale" duration={1000}>
                  <Card
                    onClick={handleToggleInvisibility3}
                    centered
                    href="#card-example-link-card"
                  >
                    <Image src="https://i.imgur.com/kPyrE4S.jpg" />

                    <CardContent extra>
                      <a>
                        <Icon name="computer" />
                        Software Engineer
                      </a>
                    </CardContent>
                  </Card>
                </Transition>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Grid.Row padded>
                <Divider hidden />
                <Transition visible={visible} animation="scale" duration={1000}>
                  <Card onClick={handleToggleInvisibility5} centered>
                    <Image
                      src="https://i.imgur.com/yeyQ0aa.jpg"
                      wrapped
                      ui={false}
                    />
                    <CardContent extra>
                      <a>
                        <Icon name="music" />
                        Musician
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
                  <Card onClick={handleToggleInvisibility7} centered>
                    <Image
                      src="https://i.imgur.com/CIfphyK.jpg"
                      wrapped
                      ui={false}
                    />

                    <CardContent extra>
                      <a>
                        <Icon name="wrench" />
                        Handy Man
                      </a>
                    </CardContent>
                  </Card>
                </Transition>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Grid.Row padded>
                <Divider hidden />
                <Transition visible={visible} animation="scale" duration={1000}>
                  <Card onClick={handleToggleInvisibility9} centered>
                    <Image
                      src="https://i.imgur.com/Jum8hGP.jpg"
                      wrapped
                      ui={false}
                    />
                    <CardContent extra>
                      <a>
                        <Icon name="beer" />
                        Bartender
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
                  <Card onClick={handleToggleInvisibility11} centered>
                    <Image
                      src="https://i.imgur.com/y62LjRD.png"
                      wrapped
                      ui={false}
                    />

                    <CardContent extra>
                      <a>
                        <Icon name="game" />
                        Gamer
                      </a>
                    </CardContent>
                  </Card>
                </Transition>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : null}

      <Divider hidden />
    </>
  );
};

export default AboutMe;
