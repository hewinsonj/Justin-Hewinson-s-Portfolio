import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingPage'


const FeedPage  = () => {

      //piece of state for badges modal --> should be abstracte into it's own component
      const [open, setOpen] = React.useState(false)
 
    return(
  <>
    <Grid columns={3} centered>
      <div id='topSpace'><h1></h1></div>
      <Grid.Row >
        <Container>
        <Segment textAlign='center'>
          <h1>Hello, welcome to my world!</h1>
        </Segment>
        </Container>
      </Grid.Row>
      
      <Grid.Column width={7}>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
      </Grid.Column>
      <Grid.Column  width={8}>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
        <Segment textAlign='center'>
          <h1>Activity Feeddsdfsdfsdfsdfsdfsdfsdfsdfs</h1>
          <h2>sdfsdf</h2>
        </Segment>
      </Grid.Column>
    </Grid>
	</>	
	)
}

export default FeedPage