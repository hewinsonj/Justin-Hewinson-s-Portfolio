import React, { useState } from "react";
import {
  Grid,
  Segment,
  Icon,
  Divider,
  Form,
  Container,
  Message,
  Header,
  List,
  Image,
  Progress,
} from "semantic-ui-react";
import { signUp, signIn } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import { useNavigate, Link } from "react-router-dom";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const navigate = useNavigate();

  const onSignUp = (event) => {
    event.preventDefault();

    const { msgAlert, setUser } = props;
    const credentials = {
      email,
      username,
      password,
      passwordConfirmation,
      createdDate,
    };

    signUp(credentials)
      .then(() => signIn(credentials))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign Up Success",
          message: messages.signUpSuccess,
          variant: "success",
        })
      )
      .then(() => navigate("/projects"))
      .catch((error) => {
        setEmail("");
        // setUsername('')
        setPassword("");
        setPasswordConfirmation("");
        // setCreatedDate('')
        msgAlert({
          heading: "Sign Up Failed!",
          // + error.message
          message: messages.signUpFailure,
          variant: "danger",
        });
      });
  };

  return (
    <Grid columns={2} divided padded centered>
      <Grid.Column>
        <Segment raised inverted color="black">
          <h3>Create Account</h3>
          <Container fluid>
            <Form onSubmit={onSignUp}>
              <br />
              <Form.Field>
                <Form.Input
                  fluid
                  icon="users"
                  iconPosition="left"
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <br />
              <Form.Field>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Field>
              <br />
              <Form.Field>
                <Form.Input
                  fluid
                  icon="check"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  required
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  type="password"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Form.Field>
              <br />
              <Form.Button
                secondary
                inverted
                color="yellow"
                class="signButton"
                type="submit"
                centered
                textAlign="center"
                verticalAlign="middle"
              >
                Submit
              </Form.Button>
            </Form>
          </Container>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default CreateAccount;
