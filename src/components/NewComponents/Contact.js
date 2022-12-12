import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingPage'


const Contact  = () => {

      const [open, setOpen] = React.useState(false)
 
    return(
    <>
    <Segment color='black' inverted >
        <Segment textAlign='center'>
            <h1>Contact me</h1> 
        </Segment>
        <Segment>
        <Grid columns={2} centered padded >
            
            <Grid.Column textAlign='center'>
            <Grid.Row>
                <h1>Email: <a href='mailto:hewinsonj@gmail.com?subject=Contacting you from your portfolio'>hewinsonj@gmail.com</a></h1>
            </Grid.Row>
            <Grid.Row>
                <h1>Cell: (404) 454 1727</h1>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <Grid.Row>
                <h1>LinkedIn: <a href='https://www.linkedin.com/in/justin-hewinson/'>https://www.linkedin.com/in/justin-hewinson/</a></h1>
            </Grid.Row>
            <Grid.Row>
                <h1>GitHub: <a href='https://github.com/hewinsonj'>https://github.com/hewinsonj</a></h1>
            </Grid.Row>
            </Grid.Column>
            <Grid textAlign='center' padded>
            <Grid.Row textAlign='center' verticalAlign='middle'>
                <h1>Located near Atlanta, Georgia</h1>
            </Grid.Row>
            </Grid>
        </Grid>
        </Segment>
    </Segment>
        
    </>	
    )
}

export default Contact