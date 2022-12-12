import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  Button, Divider, Segment, Grid, Feed, Icon, Image, Progress, Modal, Container } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import ActivitySegment from '../activities/ActivitySegment'
import ProjectSegment from '../projects/ProjectSegment'
import { getMyProjects } from '../../api/project'
import LoadingScreen from '../shared/LoadingPage'
import { getAllProjects } from '../../api/project'
import MyProjects from '../projects/MyProjects'





const Projects = ({ msgAlert, newProject }) => {

    const [allProjects, setAllProjects] = useState(null)

    useEffect(() => {
        getAllProjects()
            .then(res => {
                setAllProjects(res.data.projects.reverse())
            })
            .catch(error => {
                msgAlert({
                    'heading': 'Error',
                    'message': 'Could not get Projects',
                    'variant': 'danger'
                })
            })
    },[])



	return (
		<>
        <div >
		    
                <Divider />

                <Grid columns={3}>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={7}>
                            <Segment>
                                <h2 id='yourActs'>Your Projects</h2>
                                <MyProjects
                                    allProjects={allProjects}
                                    msgAlert={msgAlert}
                                    // completedCounts={completedCounts}
                                    // setCompletedCounts={setCompletedCounts}
                                    // setBadgeUpdate={setBadgeUpdate}
                                />
                            </Segment>          
        
                    </Grid.Column>
                    <Grid.Column width={5} >

                    </Grid.Column>
                </Grid>
        </div>
		</>
	)
}

export default Projects