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
  Sticky,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingPage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = React.useState(false);
  const [bigMenu, setBigMenu] = React.useState(true);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    componentDidMount();
    componentWillUnmount();
    updateDimensions();
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

  componentDidMount();
  componentWillUnmount();

  const isBigMenu = bigMenu ? (
    <Image
      src="https://i.imgur.com/0NFkSem.jpg"
      size="large"
      id="profilePic"
      style={{
        border: "solid",
        bordercolor: "solid",
        margintop: "2rem",
        paddingright: "20vw",
      }}
      circular
      floated="right"
      padded="very"
    />
  ) : (
    <Image
      src="https://i.imgur.com/0NFkSem.jpg"
      size="medium"
      id="profilePic"
      style={{
        border: "solid",
        bordercolor: "black",
      }}
      circular
      spaced="right"
    />
  );

  return (
    <>
      <Grid padded centered columns={2}>
        <Grid.Row>
          <div class="landingback raleway">
            <p id="flexText">Welcome to </p>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div class="landingback raleway">
            <h1 id="flexText">
              Justin Hewinson
              <Link to={`sign-in`} id="flexText">
                '
              </Link>
              s
            </h1>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div class="landingback raleway">
            <p id="flexText">portfolio</p>
          </div>
        </Grid.Row>
        <Grid.Row fluid centered>
          <Container fluid>
            <h1
              style={{
                filter: "drop-shadow(6px 6px 30px black",
                justifyContent: "center",
                alignContent: "center",
                verticalAlign: "center",
                margin: "5vw",
                marginTop: "0",
              }}
            >
              {isBigMenu}
            </h1>
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default LandingPage;
