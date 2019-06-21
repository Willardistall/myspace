import React from 'react';
import { Link, } from 'react-router-dom';
import { AuthConsumer, } from "../providers/AuthProvider";
import {Button, Form, Segment, Header, Divider, Grid, Icon } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: "" , password: "", }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({email, password,}, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({[name]: value, });
  }

  render () {
    const { email, password, } = this.state;
    
    return (
      <>
      <Header as='h1' textAlign='center'>
        OUR SPACE
        </Header>

      <Header as='h3' icon textAlign='center' color='blue'>
         <Icon name='users' color='blue' circular inverted/>
            <Header.Content>A Place for Friends</Header.Content>
            </Header>

            
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              icon='user'
              iconPosition='left'
              label="Email"
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
              />
              <Form.Input
              icon='lock' 
              iconPosition='left'
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
              />
              {/* <Segment textAlign='center' basic> */}
                <Button primary type='submit'>Submit</Button>
                </Form>
                </Grid.Column>
              <Grid.Column verticalAlign='middle'>
              <Link to="/register">
              <Button content='Sign up' icon='signup' size='big' color='blue' />
              </Link>
             </Grid.Column>
                  </Grid>

                <Divider vertical>Or</Divider>
                  </Segment>
    </>
      )
    }
  }

 
  export default class ConnectedLogin extends React.Component{
    render () {
      return(
        <AuthConsumer>
          { auth => <Login {...this.props} auth={auth}/>}
        </AuthConsumer>
      )
    }
  }
