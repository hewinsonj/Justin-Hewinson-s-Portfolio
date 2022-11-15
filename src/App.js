// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
// import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import SignPage from './components/shared/SignPage'
import UserPage from './components/user/UserPage'
import UserPublicPage from './components/user/UserPublicPage'
import ChangePassword from './components/auth/ChangePassword'
import FeedPage from './components/FeedPage/FeedPage'
import ShowActivity from './components/activities/ShowActivity'
import IndexActivity from './components/activities/IndexActivity'
import ShowProject from './components/projects/ShowProject'
import IndexProject from './components/projects/IndexProject'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Ref, Form, Container, Sidebar, Menu, Checkbox } from 'semantic-ui-react'


// import CreateActivity from './components/activities/CreateActivity'
// import UpdateActivity from './components/activities/UpdateActivity'


const App = (triggerRefresh) => {

	const [user, setUser] = useState(null)
	const [viewedUser, setViewedUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	//trigger to help components update if there is a new activity created w/in the modal, which can be called from anywhere. This is purely a toggle and no meaning should be taken from whether it is true or false
	const [newActivity, setNewActivity] = useState(false)
	const [newProject, setNewProject] = useState(false)

	//grab requested user's id from params
	// const { otherUserId } = useParams()
	//set state variables for activities which are public for this user's public profile and completed counts
	const segmentRef = React.useRef()
	const [visible, setVisible] = React.useState(false)
	const [email, setEmail] = useState('')
	const [thisUser, setThisUser] = useState({})
	const handleRefresh = (e) => {
		e.preventDefault()
		triggerRefresh()
	}

	const clearUser = () => {setUser(null)}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
		)
		})
	}
	return (
		<Fragment>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
			{/* <UserPublicPage user={user} msgAlert={msgAlert} setNewActivity={setNewActivity} setNewProject={setNewProject}/> */}
			<>
			

			
				{/* <Sidebar.Pushable 
					as={Segment} 
					vertical>
					<Sidebar
						as={Menu}
						animation='overlay'
						icon='labeled'
						inverted
						onHide={() => setVisible(false)}
						vertical
						visible={visible}
						width='very thin'
						target={segmentRef}
					>
						<Menu.Item as='a'>
						<Link to='/' >
							
								<Icon name='home' />
								Home
							
						</Link>
						</Menu.Item>
						<Menu.Item as='a'>
						<Icon name='gamepad' />
						Games
						</Menu.Item>
						<Menu.Item as='a'>
						<Icon name='camera' />
						Channels
						</Menu.Item>
						<Link to={`/feed-page`} >
							<Menu.Item	name='feed page' as='a'>
								<Icon name='smile outline'/>
								About Me
							</Menu.Item>
						</Link>
					</Sidebar>
					<Sidebar.Pusher> */}
					<Header user={user} msgAlert={msgAlert} setNewActivity={setNewActivity} setNewProject={setNewProject}/>
							<Ref innerRef={segmentRef} >
								<Routes>
									<Route path='/' element={<Home user={user} msgAlert={msgAlert} setUser={setUser} />} />
									{/* <Route
										path='/sign-up'
										element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
									/> */}
									<Route 
										path='/user-page/' 
										element={<UserPage msgAlert={msgAlert} user={user} newActivity={newActivity} newProject={newProject} />} 
									/>
									<Route 
										path='/user-public-page/:otherUserId' 
										element={<UserPublicPage msgAlert={msgAlert} currentUser={user} viewedUser={viewedUser}/>} 
									/>
									<Route
										path='/sign-in'
										element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
									/>
									<Route
										path='/sign-out'
										element={
										<RequireAuth user={user}>
											<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
										</RequireAuth> 
										}
									/>
									<Route
										path='/sign-page'
										element={<SignPage msgAlert={msgAlert} setUser={setUser} />}
									/>
									<Route
										path='/change-password'
										element={
										<RequireAuth user={user}>
											<ChangePassword msgAlert={msgAlert} user={user} />
										</RequireAuth>
									}
									/>
									<Route
										path='/feed-page'
										element={
											<FeedPage msgAlert={msgAlert}/>
									}
									/>
									<Route
										path='/show-page/:activityId'
										element={
											<ShowActivity msgAlert={msgAlert} user={user} />
									}
									/>
									<Route
										path='/projects/:projectId'
										element={
											<ShowProject msgAlert={msgAlert} user={user} />
									}
									/>
									<Route
										path='/activities'
										element={
											<IndexActivity msgAlert={msgAlert} user={user} />
									}
									/>
									<Route
										path='/projects'
										element={
											<IndexProject msgAlert={msgAlert} user={user} />
									}
									/>
									{/* <Route
										path='/user-page'
										element={
										<RequireAuth user={user}>
											<CreateActivity msgAlert={msgAlert} user={user} />
										</RequireAuth>
									}
									/> */}
								</Routes>
							</Ref>
					{/* </Sidebar.Pusher>
				</Sidebar.Pushable> */}
			</>	
		</Fragment>
	)
}

export default App
