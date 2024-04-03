import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingPage'


const Skills  = () => {

      const [open, setOpen] = React.useState(false)
 
    return(
    <>
    <Segment color='black' inverted fluid>
        <Segment textAlign='center'>
            <h1>Skills</h1> 
        </Segment>
        <Segment color='grey' inverted>
        <Grid columns={2} centered padded >
            
            <Grid.Column padded floated='right'  width={3}>
            <Grid.Row textAlign='center'>
                <h1 id='center'>Development</h1>
            </Grid.Row>
            <Segment>
            <Grid.Row >
                <h2><Icon name='circle' size='tiny' centered/> JavaScript</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Python</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> MongoDb</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Django</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> SQL</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> HTML 5</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> CSS 3</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> PostgreSQL</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Bootstrap</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> React</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Semantic UI</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Node</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Liquid</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Express</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> JSON</h2>
            </Grid.Row>
            </Segment>
            </Grid.Column>
            <Grid.Column padded width={3} floated='left'>
            <Grid.Row>
                <h1 id='center'>Tools</h1>
            </Grid.Row>
            <Segment>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> GitHub</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Postman</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Powershell</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> Mongoose</h2>
            </Grid.Row>
            <Grid.Row>
                <h2><Icon name='circle' size='tiny' centered/> VS Code</h2>
            </Grid.Row>
            
            </Segment>
            </Grid.Column>
        </Grid>
        </Segment>
    </Segment>
        
    </>	
    )
}

export default Skills