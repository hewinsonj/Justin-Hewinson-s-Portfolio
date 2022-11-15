import { useNavigate, useParams, Link } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, Ref, Form, Container, Sidebar, Menu, Checkbox } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'

// import LoadingScreen from '../shared/LoadingPage'


const UserPublicPage = ({currentUser, msgAlert, viewedUser, triggerRefresh}) => {

    //grab requested user's id from params
    const { otherUserId } = useParams()


    //set state variables for activities which are public for this user's public profile and completed counts
    const segmentRef = React.useRef()
    const [visible, setVisible] = React.useState(false)
    const [email, setEmail] = useState('')
    const [thisUser, setThisUser] = useState({})

    const handleRefresh = (e) => {
        e.preventDefault()
        triggerRefresh()
    }
	return (
        
	<>
        <div >
            <Grid columns={1}>
                <Grid.Column>
                    <Checkbox
                    checked={visible}
                    label={{ children: <code>visible</code> }}
                    onChange={(e, data) => setVisible(data.checked)}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                        target={segmentRef}
                    >
                        <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                        </Menu.Item>
                        <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher>
                    <Ref innerRef={segmentRef}>
                        <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        
                        </Segment>
                    </Ref>
                    </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid>
        </div>
	</>	
	)
}

export default UserPublicPage 

