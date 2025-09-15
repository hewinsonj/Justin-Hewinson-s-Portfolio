import { Link } from "react-router-dom";
import {
  Segment,
  Grid,
  Icon,
  Header,
  List,
  ListItem,
  Divider,
} from "semantic-ui-react";
import React, { useEffect } from "react";

const Documents = () => {
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
    setBigMenu((prevBigMenu) => (prevBigMenu = true));
  };
  const handleWindowSmall = () => {
    setBigMenu((prevBigMenu) => (prevBigMenu = false));
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
          <Icon name="paperclip" size="huge" className="landingback" />
          Documents
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
          <Icon name="paperclip" size="huge" className="landingback" />
          Documents
        </Header>
      )}
      <Segment
        padded
        color="grey"
        inverted
        style={{
          border: "solid",
          borderColor: "lightgrey",
        }}
      >
        {bigMenu ? (
          <Grid centered>
            <Segment centered fluid>
              <List bulleted size="massive" floated="left">
                <Divider hidden fitted></Divider>
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                    target="_blank"
                    color="blue"
                    className="linkSizeBig"
                  >
                    Resume
                  </Link>
                </ListItem>
                <Divider hidden></Divider>
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/12GACq2BBciISgyVBFPUZazc3ggfUEZeR/view?usp=sharing`}
                    target="_blank"
                    color="blue"
                    className="linkSizeBig"
                  >
                    OutSystems Associate Reactive Developer Certification
                  </Link>
                </ListItem>
                <Divider hidden></Divider>
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/1sR_wR8siTJVva1Bv6qcGf7dJ6GoILf_z/view?usp=sharing`}
                    target="_blank"
                    color="blue"
                    className="linkSizeBig"
                  >
                    General Assembly Course Completion Certificate
                  </Link>
                </ListItem>
              </List>
            </Segment>
          </Grid>
        ) : (
          <Grid centered>
            <Segment centered fluid>
              <List bulleted size="massive" divided floated="left">
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                    target="_blank"
                    color="blue"
                  >
                    Resume
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/12GACq2BBciISgyVBFPUZazc3ggfUEZeR/view?usp=sharing`}
                    target="_blank"
                    color="blue"
                  >
                    OutSystems Associate Reactive Developer Certification
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={`//drive.google.com/file/d/1sR_wR8siTJVva1Bv6qcGf7dJ6GoILf_z/view?usp=sharing`}
                    target="_blank"
                    color="blue"
                  >
                    General Assembly Course Completion Certificate
                  </Link>
                </ListItem>
              </List>
            </Segment>
          </Grid>
        )}
      </Segment>
    </>
  );
};

export default Documents;
