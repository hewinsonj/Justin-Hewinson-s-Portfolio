import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  Button, Divider, Segment, Grid, Feed, Icon, Image, Progress, Modal, Container } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import ActivitySegment from '../activities/ActivitySegment'
import ProjectSegment from '../projects/ProjectSegment'
import { getMyActivities } from '../../api/activity'
import { getMyProjects } from '../../api/project'
import LoadingScreen from '../shared/LoadingPage'
import BadgesSegment from '../badges/BadgesSegment'
import ActivityFeedUserPage from '../activities/ActivityFeedUserPage'
import { getAllActivities } from '../../api/activity'
import { getAllProjects } from '../../api/project'
import MessagesModal from './MessagesModal'

import MyProjects from '../projects/MyProjects'
import MyActivities from '../activities/MyActivities'
import BuddiesModal from './BuddiesModal'




const UserPage = ({ user, msgAlert, newActivity, newProject }) => {

    //set state variables for all activities, badges and user's count of completed activities
    const [allMyActivities, setAllMyActivities] = useState(null)


    const [allMyProjects, setAllMyProjects] = useState(null)
    //this completed counts object can be used to trigger refresh of badge modal data as new activities apply to the badge
    const [completedCounts, setCompletedCounts] = useState({})
    //badges are passed down to BadgeSegment through to BadgeModal. the set function will also pass through to the ActivitySegment so that if there is a new badge it can be added. There will be a listener on BadgesSegment and NewBadgeModal to determine whether the 
    const [badges, setBadges] = useState(null)
    //buddies array will live here. Since user obj. does not have state re-set, any reference to buddies should use this instead of user.buddies
    // const [publicActivities, setPublicActivities] = useState(null)
    const [publicProjects, setPublicProjects] = useState(null)

  
    //state for an update to badges --> will tell whether a badge was gained or lost. If there is a new badge, it's description will also be in the object. setBadgeUpdate will be passed through to activity segment. badgeUpdate will be sent to the newBadge Modal 
    const [badgeUpdate, setBadgeUpdate] = useState(null)

    
    
    //after initial render, make axios call to grab activity/count data and set the state variables. Also listen for an update to user badge/completions data 
    useEffect(() => {
        getMyActivities(user)
            .then(res => {
                setAllMyActivities(res.data.activities.reverse())
                setCompletedCounts(res.data.completedCounts)
                setBadges(res.data.userBadges.filter(badge => badge.level != 'none'))
            })
    },[newActivity])
    useEffect(() => {
        getMyProjects(user)
            .then(res => {
                setAllMyProjects(res.data.projects.reverse())
            })
    },[newProject])

    //set JSX for rendering the user's feed of community activities 
    // const activitiesJSX = publicActivities ? 
    // publicActivities.slice(0).reverse().filter((activity, idx) => idx < 10).map((activity) => (
    //     <ActivityFeedUserPage key={activity.id} activity={activity} user={user} msgAlert={msgAlert} mine={false} />
    // ))
    // :
    // <LoadingScreen />

    //set JSX for rendering the user's feed of community activities 
    // const projectsJSX = publicProjects ? 
    // publicProjects.slice(0).reverse().filter((project, idx) => idx < 10).map((project) => (
    //     <ProjectFeedUserPage key={project.id} project={project} user={user} msgAlert={msgAlert} mine={false} />
    // ))
    // :
    // <LoadingScreen />

    // useEffect(() => {
    //     getAllActivities()
    //         .then(res => {
    //             setPublicActivities(res.data.activities.filter(activity => activity.owner))
    //         })
    //         .catch(error => {
    //             msgAlert({
    //                 'heading': 'Error',
    //                 'message': 'Could not get activities',
    //                 'variant': 'danger'
    //             })
    //         })
    // },[])
    useEffect(() => {
        getAllProjects()
            .then(res => {
                setPublicProjects(res.data.projects.filter(project => project.owner))
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
		    
                <Container fluid>
                <Image src={user.avatar} size='small' wrapped />
                <MessagesModal
                    user={user}
                    msgAlert={msgAlert}
                />
                <BuddiesModal
                    user={user}
                    msgAlert={msgAlert}
                />
                </Container>
                <Divider />

                <Grid columns={3}>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={7}>
                            <Segment>
                                <h2 id='yourActs'>Your Projects</h2>
                                <MyProjects
                                    allMyProjects={allMyProjects}
                                    user={user}
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

export default UserPage