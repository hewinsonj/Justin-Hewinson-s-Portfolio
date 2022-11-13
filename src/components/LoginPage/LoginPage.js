import React, { useState } from 'react'
import { Grid, Segment, Icon, Divider, Form, Container, Message, Header, List, Image, Progress } from 'semantic-ui-react'
import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'


import AvatarSelection from '../../components/Avatars/AvatarSelection'

import { useNavigate, Link } from 'react-router-dom'





const LoginPage = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [username, setUsername] = useState('')
  const [createdDate, setCreatedDate] = useState('')
  //default avatar will be badger
  const [avatar, setAvatar] = useState('https://i.imgur.com/uEW4fPX.png')
  const navigate = useNavigate()

  const onSignUp = (event) => {
    event.preventDefault()

    const { msgAlert, setUser } = props

    const credentials = {email, username, password, passwordConfirmation, createdDate, avatar }


    signUp(credentials)
      .then(() => signIn(credentials))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Sign Up Success',
          message: messages.signUpSuccess,
          variant: 'success',
        })
      )
      .then(() => navigate('/user-page'))
      .catch((error) => {
                setEmail('')
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
                setCreatedDate('')
        msgAlert({
          heading: 'Sign Up Failed Because Only Justin Is Allowed To Make A New Account... I Know... Sorry, Its Super Exclusive. But Its Not Like Youre Missing Anything. Okay Bye Now!' 
          // + error.message
          ,
          message: messages.signUpFailure,
          variant: 'danger',
        })
      })
  }


return (

  <Grid columns={2} divided padded centered>




      <Grid.Column>
        <Segment 
          raised
          inverted
          color='yellow'
          
        >
          <h3>Sign Up</h3>
          <Container fluid>
          <Form  onSubmit= {onSignUp}>
              <br />
              <Form.Field>
                  <Form.Input 
                      fluid
                      icon='users' 
                      iconPosition='left' 
                      required
                      type='email'
                      name='email'
                      value={email}
                      placeholder='Enter email'
                      onChange={e => setEmail(e.target.value)}

                  />
              </Form.Field>
              <br />
              <Form.Field>
                  <Form.Input 
                      fluid
                      icon='lock'
                      iconPosition='left'
                      required
                      name='password'
                      value={password}
                      type='password'
                      placeholder='Password'
                      onChange={e => setPassword(e.target.value)}

                  />
              </Form.Field>
              <br />
              <Form.Field>
                  <Form.Input
                      fluid 
                      icon='check' 
                      iconPosition='left' 
                      placeholder='Confirm Password'
                      required
                      name='passwordConfirmation'
                      value={passwordConfirmation}
                      type='password'
                      onChange={e => setPasswordConfirmation(e.target.value)}
                      
                  />
              </Form.Field>
              <br />
              <Form.Button 
                   secondary 
                   inverted 
                   color='yellow'
                  class="signButton" 
                  type='submit'
                  centered
                  textAlign='center'
                  verticalAlign='middle'
              >
                  Submit
              </Form.Button>
          </Form>
          </Container>
      
  
<Divider horizontal>Or</Divider>


		  {/* <Segment raised inverted color='yellow' verticalAlign='middle' id="segment" stretched> */}
            {/* <Grid columns={2} stackable textAlign='center'>
                <Grid.Column centered> */}
                  
                <Message fluid attached='bottom' color='yellow' stretched size='massive' textAlign='center'  centered verticalAlign='middle'>
                  <Icon name='help' />
                  <Link to='/sign-in' centered>Login here</Link>
              </Message> 
    {/* </Grid.Column>
            </Grid> */}
		  {/* </Segment> */}

</Segment>
      </Grid.Column>
  </Grid>
)}

export default LoginPage