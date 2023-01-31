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





const Projects = ({ msgAlert, newProject, user }) => {

    const [allProjects, setAllProjects] = useState(null)
    const [filterProjects, setFilterProjects] = useState([])
    const [searchText, setSearchText] = useState([])


    const handleChange = (e) => {
        // const caseUnsense = e.target.value.toUpperCase()
        let projects = allProjects
        setFilterProjects(projects.filter(
        a => a.client.toUpperCase().includes(e.target.value.toUpperCase()))
        )
    }

    useEffect(() => {
        getAllProjects()
            .then(res => {
                setAllProjects(res.data.projects.reverse())
                setFilterProjects(res.data.projects.reverse())
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

                <Grid centered>
  
                    <Grid.Column width={13}>
                            <Segment>
                                <h2 id='yourActs'>My Projects</h2>
                                <MyProjects
                                    allProjects={allProjects}
                                    msgAlert={msgAlert}
                                    user={user}
                                    filterProjects={filterProjects}
                                    handleChange={handleChange}
                                    // completedCounts={completedCounts}
                                    // setCompletedCounts={setCompletedCounts}
                                    // setBadgeUpdate={setBadgeUpdate}
                                />
                            </Segment>          
        
                    </Grid.Column>

                </Grid>
        </div>
		</>
	)
}

export default Projects