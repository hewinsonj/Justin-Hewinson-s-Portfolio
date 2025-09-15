import {
  Segment,
  Icon,
  Header,
  List,
  Container,
  Divider,
  ListItem,
} from "semantic-ui-react";
import React, { useEffect } from "react";

const Contact = () => {
  const [bigMenu, setBigMenu] = React.useState(true);

  const handleWindowBig = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = true));
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
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

  return (
    <>
      <Divider hidden />

      {bigMenu ? (
        <Container textAlign="center">
          <Header as="h2" size="huge" icon inverted className="landingback">
            <Icon name="phone volume" size="huge" className="landingback" />
            Contact
          </Header>
        </Container>
      ) : (
        <Container textAlign="center">
          <Header as="h2" size="large" icon inverted className="landingback">
            <Icon name="phone volume" size="large" className="landingback" />
            Contact
          </Header>
        </Container>
      )}

      <Segment
        color="grey"
        inverted
        style={{
          border: "solid",
          borderColor: "light grey",
        }}
      >
        <Segment textAlign="center">
          {bigMenu ? (
            <List size="massive" divided>
              <ListItem>
                Mobile: <a href="tel:4044541727">(404) 454-1727 </a>
              </ListItem>
              <ListItem>
                Email:{" "}
                <a href="mailto:hewinsonbusiness@gmail.com?subject=Contacting you from your portfolio">
                  hewinsonbusiness@gmail.com
                </a>
              </ListItem>
              <ListItem>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/justin-hewinson/">
                  https://www.linkedin.com/in/justin-hewinson/
                </a>
              </ListItem>
              <ListItem>
                GitHub:{" "}
                <a href="https://github.com/hewinsonj">
                  https://github.com/hewinsonj
                </a>
              </ListItem>
              <ListItem>Located near Atlanta, GA</ListItem>
            </List>
          ) : (
            <List size="huge" divided>
              <ListItem>
                Mobile: <a href="tel:4044541727">(404) 454-1727 </a>
              </ListItem>
              <ListItem>
                Email:{" "}
                <a href="mailto:hewinsonbusiness@gmail.com?subject=Contacting you from your portfolio">
                  hewinsonbusiness@gmail.com
                </a>
              </ListItem>
              <ListItem>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/justin-hewinson/">
                  https://www.linkedin.com/in/justin-hewinson/
                </a>
              </ListItem>
              <ListItem>
                GitHub:{" "}
                <a href="https://github.com/hewinsonj">
                  https://github.com/hewinsonj
                </a>
              </ListItem>
              <ListItem>Located near Atlanta, GA</ListItem>
            </List>
          )}
        </Segment>
      </Segment>
    </>
  );
};

export default Contact;
