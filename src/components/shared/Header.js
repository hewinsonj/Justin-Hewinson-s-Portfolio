import React, { Component } from 'react'
import { Menu, Icon, Sticky, Modal, Button,	Checkbox, Grid, Image, Segment,	Sidebar, } from 'semantic-ui-react'
import CreateActivity from '../activities/CreateActivity'
import CreateProject from '../projects/CreateProject'
import UserPublicPage from '../user/UserPublicPage'
import { Link } from 'react-router-dom'


	

export default class Header extends Component {
	state = { 
		activeItem: 'home',
		setOpen: false,
		newActivity: false, 
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	handleClose = () => { this.setState({setOpen: false})}
	
  
	render() {
	  const { activeItem } = this.state
  
	  return (
		<>
		{/* ----------------------------------------------------------------- */}
		<Sticky>
			{/* <Grid>
				<Grid.Column width={3}>
					<Segment fluid>
						
						<Menu pointing secondary vertical fluid>
							<Menu.Item
							name='home'
							active={activeItem === 'home'}
							onClick={this.handleItemClick}
							>
								<Link to='/'>
									<Icon name='certificate'/>
								</Link>
							</Menu.Item>
							<Menu.Item
							name='messages'
							active={activeItem === 'messages'}
							onClick={this.handleItemClick}
							></Menu.Item>
							<Menu.Item
							name='friends'
							active={activeItem === 'friends'}
							onClick={this.handleItemClick}
							></Menu.Item>
						</Menu>
						
					</Segment>
					{/* <div id='stretch'></div> 
				</Grid.Column>
			</Grid> */}


		   <Menu inverted secondary pointing size='huge' id='header' >
 					

				<Menu.Item
					name='about me'
					active={activeItem === 'about me'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`/about-me`}  
					>
						About me
					</Link>
				</Menu.Item>
				<Menu.Item
					name='search'
					active={activeItem === 'search'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`/projects`}  
					>
						Projects
					</Link>
				</Menu.Item>
				<Menu.Item
					name='skills'
					active={activeItem === 'skills'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`skills `} 
					>
						Skills
					</Link>
					
				</Menu.Item>
				<Menu.Item
					name='my public profile'
					active={activeItem === 'my public profile'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={``} 
					>
						Goals
					</Link>
				</Menu.Item>
				
				<Menu.Item
					name='resume'
					active={activeItem === 'resume'}
					onClick={this.handleItemClick}
				>
					{/* <Link 
						to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`} 
					>
						Resume
					</Link> */}
					<a href="//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view" target="_blank">Resume</a>
				</Menu.Item>
				<Menu.Item
					name='contact'
					active={activeItem === 'contact'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`contact`} 
					>
						Contact
					</Link>
				</Menu.Item>
				
			{this.props.user ?  
			
			<Menu.Menu>		
				
				<Modal
					onClose={() => this.handleClose()}
					onOpen={() => this.setState({setOpen: true})}
					open={this.state.setOpen}
					trigger={
						<Menu.Item 
							name='New Project'
							active={activeItem === 'new project'}
							onClick={this.handleItemClick}
						>
							<Link
								to='user-page'>
								New Project
							</Link>
						</Menu.Item>}
       			 >
					<Modal.Content>
						<CreateProject user={this.props.user} setNewProject={this.props.setNewProject}  msgAlert={this.props.msgAlert} handleClose={this.handleClose}  />
					</Modal.Content>
        		</Modal>

				<Menu.Item
					name='sign out'
					active={activeItem === 'sign out'}
					onClick={this.handleItemClick}
				>
					<Link 
						to='sign-out' 
					>
						Sign Out
					</Link>
				</Menu.Item>
				<Menu.Item
					name='change password'
					active={activeItem === 'change password'}
					onClick={this.handleItemClick}
				>
					<Link 
						to='change-password' 
					>
						Change Password
					</Link>
				</Menu.Item>

			</Menu.Menu> 

			:  
			
				null


			 } 
		   </Menu> 
		  </Sticky>
	</>

		
	  )
	}
  }