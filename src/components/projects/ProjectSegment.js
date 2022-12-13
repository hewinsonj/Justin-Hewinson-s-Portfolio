import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {  Button, Segment, Grid, Feed, Icon, Image, Progress, List, Divider, Container, Modal } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import { updateProject } from '../../api/project'


const ProjectSegment = ({ project, msgAlert, user}) => {
    //declare pieces of state --> grab current progress from activity object and set it as initial state. Set state variables to track when progress is being saved and whether to show the save button
    const [percent, setPercent] = useState(project.progress)
    const [percentChangeSaving, setPercentChangeSaving] = useState(false)
    const [showSaveButton, setShowSaveButton] = useState(false)
    const [open, setOpen] = useState(false)

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
        <Segment id='actListItems' raised>
            <Container fluid>
            <Grid columns={4} textAlign='center'>
                <Grid.Row>
                {user ? <Link to={`./${project.id}`}><h1 id='center'>{project.projTitle}</h1></Link> : <h1 id='center'>{project.projTitle}</h1>}
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={11} padded textAlign='center'>
                        <Segment>
                    <Modal
					onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
					open={open}
                    dimmer='blurring'
					trigger={
                    <Image src={project.img1} size='massive'></Image>
						}
       			 >
					<Modal.Content color='grey'>
                        <Grid textAlign='center' verticalAlign='middle'>
                            <Grid.Row>
                                <Segment textAlign='center' color='grey' inverted>
                                    <Image spaced src={project.img1} size='massive'></Image>
                                </Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment textAlign='center' color='grey' inverted>
                                    <Image spaced src={project.img2} size='massive'></Image>
                                </Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment textAlign='center' color='grey' inverted>
                                    <Image spaced src={project.img3} size='massive'></Image>
                                </Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <div>
                                <Button onClick={() => setOpen(false)} color='red' floated='right' circular size='large'>Close</Button>
                                </div>
                            </Grid.Row>
                        </Grid>
                       
					</Modal.Content>
        		</Modal>
                </Segment>
                        <h4>click the image to view more</h4>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        
                        <Grid.Row fluid>
                           
                                <h2> <Icon name='caret right' /><a href={`${project.link1}`} target="_blank">
                                    { project.link2.length > 1 ?
                                    'Front-end'
                                    :
                                    'Repo'
                                    }
                                </a></h2>
                                { project.link2.length > 1 ?
                                    <h2> <Icon name='caret right' /><a href={`${project.link2}`} target="_blank">Back-end</a></h2>
                                    :
                                    null
                                }
                                
                                { project.link3 ?
                                    <h2> <Icon name='caret right' /><a href={`${project.link3}`} target="_blank">Deployed</a></h2>
                                    :
                                    null
                                }
                           
                                
                          
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                        <List.Item ><h3>{project.description}</h3></List.Item>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <List.Item ><h4>Start Date:</h4> {project.startDate}</List.Item>
                    </Grid.Column>
                    <Grid.Column>
                        <List.Item ><h4>Finish Date:</h4> {project.finishDate}</List.Item>
                    </Grid.Column>
                    <Grid.Column>
                        <List.Item ><h4>Client:</h4> {project.client}</List.Item>
                    </Grid.Column>
                    <Grid.Column>
                        <List.Item ><h4>Role:</h4> {project.role}</List.Item>
                    </Grid.Column>
                </Grid.Row>                    

                {/* <Grid.Column width={4} verticalAlign='center' textAlign='middle'>
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
                </Grid.Column> */}
            </Grid>
            </Container>
        </Segment>
    )
}

export default ProjectSegment