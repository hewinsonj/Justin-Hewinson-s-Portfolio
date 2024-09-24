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
import { Link } from "react-router-dom";

const Documents = () => {
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

  return (
    <>
      {bigMenu ? (
        <Header as="h2" size="huge" icon inverted textAlign="center">
          <Icon name="paperclip" size="huge" />
          Documents
        </Header>
      ) : (
        <Header as="h2" size="large" icon inverted textAlign="center">
          <Icon name="paperclip" size="huge" />
          Documents
        </Header>
      )}
      <Segment
        padded
        color="grey"
        inverted
        style={{
          border: "solid",
          bordercolor: "lightgrey",
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
                    class="linkSizeBig"
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
                    class="linkSizeBig"
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
                    class="linkSizeBig"
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
