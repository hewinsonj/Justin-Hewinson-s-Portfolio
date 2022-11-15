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
		  <Menu inverted secondary pointing size='massive' id='header' >
 					
				<Menu.Item
					name='honey badges'
					active={activeItem === 'honey badges'}
					onClick={this.handleItemClick}
				>
					<Link 
						to='/' 
					>
						<Icon name='certificate'/>
					</Link>
				</Menu.Item>
				<Menu.Item
					name='feed page'
					active={activeItem === 'feed page'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`/feed-page`}  
					>
						Feed
					</Link>
				</Menu.Item>
			
			{this.props.user ? 
			
			// AUTHINTICATED OPTIONS 
			<Menu.Menu position='right'>		

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
				{/* <Menu.Item
					name='search'
					active={activeItem === 'search'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`/activities`}  
					>
						Search
					</Link>
				</Menu.Item> */}
				
				<Menu.Item
					name='my public profile'
					active={activeItem === 'my public profile'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={`user-public-page/${this.props.user._id}`} 
					>
						Public Profile
					</Link>
				</Menu.Item>
				<Menu.Item
					name='private profile'
					active={activeItem === 'private profile'}
					onClick={this.handleItemClick}

				>
					<Link 
						to='user-page' 
					>
						Project
					</Link>
				</Menu.Item>
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
			// UNAUTHINTICATED OPTIONS
			null

			// <Menu.Menu position='right'>	
			// 	<>
			// 		<Menu.Item
			// 			name='user access'
			// 			active={activeItem === 'user access'}
			// 			onClick={this.handleItemClick}
			// 			href='sign-page'
			// 		></Menu.Item>
			// 	</>
			// </Menu.Menu>
			}
		  </Menu>
		  </Sticky>
	</>

		
	  )
	}
  }