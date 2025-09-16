import { Link } from "react-router-dom";
import { Grid, Image, Container } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [bigMenu, setBigMenu] = useState(true);

  const handleWindowBig = () => {
    setBigMenu(true);
  };
  const handleWindowSmall = () => {
    setBigMenu(false);
  };

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

  const isBigMenu = bigMenu ? (
    <Image
      src="https://i.imgur.com/0NFkSem.jpg"
      id="profilePic"
      style={{
        width: "clamp(200px, 35vw, 300px)",
        height: "clamp(220px, 35vw, 300px)",
        objectFit: "cover",
        border: "3px solid lightgrey",
        marginTop: "1.5rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
      circular
      floated="right"
      bordered
    />
  ) : (
    <Image
      src="https://i.imgur.com/0NFkSem.jpg"
      id="profilePic"
      style={{
        width: "clamp(200px, 45vw, 400px)",
        height: "clamp(200px, 45vw, 400px)",
        objectFit: "cover",
        border: "3px solid lightgrey",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      }}
      circular
      spaced="right"
      bordered
    />
  );

  return (
    <>
      <Grid
        padded
        centered
        columns={2}
        style={{
          minHeight: "100vh",
          paddingTop: "4rem",
          paddingBottom: "2rem",
        }}
      >
        <Grid.Row>
          <div className="landingback raleway hero-blur-fix">
            <p
              id="flexText"
              style={{
                fontSize: "clamp(24px, 6vw, 64px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Welcome to
            </p>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="landingback raleway hero-blur-fix">
            <h1
              id="flexText"
              style={{
                fontSize: "clamp(48px, 9vw, 100px)",
                margin: "0.25em 0",
                lineHeight: 1.0,
              }}
            >
              Justin Hewinson
              <Link to="/sign-in" id="flexText">
                '
              </Link>
              s
            </h1>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="landingback raleway hero-blur-fix">
            <p
              id="flexText"
              className="landingback raleway"
              style={{
                fontSize: "clamp(24px, 6vw, 64px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              portfolio
            </p>
          </div>
        </Grid.Row>
        <Grid.Row centered>
          <Container fluid>
            <div
              className="hero-blur-fix"
              style={{
                filter: "drop-shadow(6px 6px 30px black)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "clamp(8px, 3vw, 32px)",
                marginTop: 0,
              }}
            >
              {isBigMenu}
            </div>
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default LandingPage;
