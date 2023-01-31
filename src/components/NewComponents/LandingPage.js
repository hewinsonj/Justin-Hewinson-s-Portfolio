import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingPage'
import { Link } from 'react-router-dom'


const LandingPage  = () => {

      //piece of state for badges modal --> should be abstracte into it's own component
      const [open, setOpen] = React.useState(false)
 
    return(
    <>
        <Grid padded>
            <Grid.Row >
                <div class='landingback'>
                    <p>Welcome to </p>
                </div>
            </Grid.Row>
            <Grid.Row>
                <div class='landingback'>
                    <p>Justin Hewinson<Link to={`sign-in`} >'</Link>s</p>
                </div>
            </Grid.Row>
            <Grid.Row>
                <div class='landingback'>
                    <p>portfolio</p>
                </div>
            </Grid.Row>
        </Grid>
	</>	
	)
}

export default LandingPage