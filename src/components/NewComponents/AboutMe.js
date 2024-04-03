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
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingPage";

const AboutMe = () => {
  const [visible, setViz] = useState(false);

  useEffect(() => {
    handleToggleVisibility();
  }, []);

  const handleToggleVisibility = () => {
    //   setViz((visible ? visible = true: visible = true)
    setViz((preViz) => (preViz = true));
    console.log("VIZ TOGGLE");
  };

  const handleToggleInvisibility = () => {
    //   setViz((visible ? visible = true: visible = true)
    setViz((preViz) => (preViz = false));
    console.log("VIZ TOGGLE");
  };

  return (
    <>
      <Grid columns={2}>
        <Grid.Row>
          {/* <Segment textAlign="center" padded>
            <h1 class="oswald projName">About me</h1>
          </Segment> */}
          <Divider hidden />
          <Transition visible={visible} animation="scale" duration={1000}>
            <Header as="h2" size="huge" icon inverted>
              <Icon name="user outline" size="huge" />
              About Me
              <HeaderSubheader></HeaderSubheader>
            </Header>
          </Transition>
        </Grid.Row>
        <Grid.Column>
          <Grid.Row padded>
            <Divider hidden />
            <Transition visible={visible} animation="scale" duration={5000}>
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
                <CardContent>
                  <CardHeader>Daniel</CardHeader>
                  <CardMeta>Joined in 2016</CardMeta>
                  <CardDescription>
                    Daniel is a comedian living in Nashville.
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <a>
                    <Icon name="user" />
                    10 Friends
                  </a>
                </CardContent>
              </Card>
            </Transition>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Divider hidden />
            <Transition visible={visible} animation="scale" duration={5000}>
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
                <CardContent>
                  <CardHeader>Daniel</CardHeader>
                  <CardMeta>Joined in 2016</CardMeta>
                  <CardDescription>
                    Daniel is a comedian living in Nashville.
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <a>
                    <Icon name="user" />
                    10 Friends
                  </a>
                </CardContent>
              </Card>
              {/* </Segment> */}
            </Transition>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AboutMe;
