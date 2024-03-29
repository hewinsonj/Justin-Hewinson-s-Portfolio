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

		   <Menu inverted secondary pointing class='linkSize' id='header' widths={6} >
		   		<Menu.Item
					name='Landing'
					active={activeItem === 'Landing'}
					onClick={this.handleItemClick}
					
				>
					<Link 
						to={`/`}  class='linkSize'
					>
						<Icon name='globe' ></Icon>
						
					</Link>
				</Menu.Item>
				<Menu.Item
					name='about me'
					active={activeItem === 'about me'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`/about-me`}  
						class='linkSize'
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
						class='linkSize'  
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
						class='linkSize'
					>
						Skills
					</Link>
					
				</Menu.Item>
				{/* <Menu.Item
					name='my public profile'
					active={activeItem === 'my public profile'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={``} 
					>
						Goals
					</Link>
				</Menu.Item> */}
				
				<Menu.Item
					name='resume'
					active={activeItem === 'resume'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`} 
						target='_blank'
						color='blue'
						class='linkSize'
					>
						Resume
					</Link>

				</Menu.Item>
				<Menu.Item
					name='contact'
					active={activeItem === 'contact'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`contact`} 
						class='linkSize'
					>
						Contact
					</Link>
				</Menu.Item>
				
			{this.props.user ?  
			
			<Menu.Menu widths={3}>		
				
				<Modal
					onClose={() => this.handleClose()}
					onOpen={() => this.setState({setOpen: true})}
					open={this.state.setOpen}
					trigger={
						<Menu.Item 
							name='New Project'
							active={activeItem === 'new project'}
							onClick={this.handleItemClick}
							class='linkSize'
						>
								New Project
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
						class='linkSize'
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
						class='linkSize'
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