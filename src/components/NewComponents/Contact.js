import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container, Divider, ListItem } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import LoadingScreen from '../shared/LoadingPage'


const Contact  = () => {

    const [open, setOpen] = React.useState(false)
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
 
    return (
      <>
        <Divider hidden />
        <Container textAlign="center" padded>
          <Header as="h2" size="huge" icon inverted>
            
              <Icon
                name="phone volume"
                size="huge"
                padded
                // onClick={handleTriggerRefresh}
              />
           
            Contact
          </Header>
        </Container>
        <Segment
          color="grey"
          inverted
          style={{
            border: "solid",
            bordercolor: "light grey",
          }}
        >
          <Segment textAlign="center">
            {bigMenu ? (
              <List size="massive" divided>
                <ListItem>Mobile: <a href="tel:4044541727" >(404) 454-1727 </a></ListItem>
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
                <ListItem>Mobile: (404) 454-1727</ListItem>
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
}

export default Contact