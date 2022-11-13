import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {  Button, Segment, Grid, Feed, Icon, Image, Progress, List, Divider, Container } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import { updateProject } from '../../api/project'


const ProjectSegment = ({ project, msgAlert, user, mine}) => {
    //declare pieces of state --> grab current progress from activity object and set it as initial state. Set state variables to track when progress is being saved and whether to show the save button
    const [percent, setPercent] = useState(project.progress)
    const [percentChangeSaving, setPercentChangeSaving] = useState(false)
    const [showSaveButton, setShowSaveButton] = useState(false)

    //functions to increment/decrement progress when user clicks --> this only changes the progress bar. Nothing is changed on the backend until "save" is hit. Progress cannot be above 100 or below 0
    

    const increaseProgress = (e) => {
        setPercent(prevPercent => {
            if (prevPercent >= 100) {
                msgAlert({
                    heading:'Whoa There!',
                    message: "You're already done!",
                    variant: 'success'
                })
                return prevPercent
            } else {
                return Math.min(100, (prevPercent + 20))
            }
        })  
    }

    const decreaseProgress = (e) => {
        setPercent(prevPercent => {
            if (prevPercent <= 0) {
                msgAlert({
                    heading:'Hey now',
                    message: "You can't do less than nothing! ",
                    variant: 'success'
                })
                return prevPercent
            } else {
                return Math.max(0, (prevPercent - 20))
            }
        })  
    }

    
    //save the progress made/lost and determine if completed activity count needs to change
    const handleSaveProgress = (e) => {
        //set percentChangeSaving to true so that save button will show as loading
        setPercentChangeSaving(true)
        //set new progress
        project.progress = percent
        //make axios call
        updateProject(user, project, project.id )
            //set 'saving' state to false so save button is no longer loading
            .then(() => {
                setPercentChangeSaving(false)
                setShowSaveButton(false)
            })
            .catch(error => {
                msgAlert({
                    heading:'Something went wrong',
                    message: "Update progress failed " + error,
                    variant: 'danger'
                })
            })
    }


    //function to determine whether to show save button or not 
    useEffect (()=> {
        setShowSaveButton((percent != project.progress))
    }, [percent])

    return (
        <Segment id='actListItems'>
            <Container fluid>
            <Grid>
                <Grid.Column width={4} verticalAlign='middle' textAlign='center'>
                </Grid.Column>

                <Grid.Column width={8} textAlign='middle' verticalAlign='center'>
                    <Link to={`/projects/${project._id}`}><h1>{project.projTitle}</h1></Link>
                    <List horizontal size='huge'>
                        <List.Item >Img1: {project.img1}</List.Item>
                        <List.Item >Img2: {project.img2}</List.Item>
                        <List.Item >Img3: {project.img3}</List.Item>
                        <List.Item >Description: {project.description}</List.Item>
                        <List.Item >Finish Date: {project.finishDate}</List.Item>
                        <List.Item >Start Date: {project.startDate}</List.Item>
                        <List.Item >Link 1: {project.link1}</List.Item>
                        <List.Item >Link 2: {project.link2}</List.Item>
                        <List.Item >Link 3: {project.link3}</List.Item>
                        <List.Item >Role: {project.role}</List.Item>
                        <List.Item >Client: {project.client}</List.Item>

                    </List>
                </Grid.Column>
                <Grid.Column width={4} verticalAlign='center' textAlign='middle'>
                    <Progress percent={percent} indicating />
                    { mine ? 
                    <>
                    <Button onClick={decreaseProgress}  negative circular icon='minus'/>
                    <Button onClick={increaseProgress} positive circular icon='plus'/>
                    {
                        showSaveButton ?
                        <>
                            <Divider hidden />
                            <Button onClick={handleSaveProgress} loading={percentChangeSaving}>Save</Button>

                        </>
                        :
                        null
                    }
                    </>
                    :
                    null
                    } 
                </Grid.Column>
            </Grid>
            </Container>
        </Segment>
    )
}

export default ProjectSegment