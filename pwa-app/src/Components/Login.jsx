import React from "react";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {  Button,FormGroup, FormControl, ControlLabel } from "react-bootstrap";
export class Signinform extends React.Component{
  constructor(props)
   {
    super(props);
    this.state = {   email: '',
      password: '',
      error: null, };
  }


  validateForm()
  {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const {
     email,
     password,
   } = this.state;


   const {
     history,
   } = this.props;

    event.preventDefault();
  }
  render() {
      const {
      email,
      password,
      error,
    } = this.state;

      return (
        <div className="Login">
          <center>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>

            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </center>
        </div>
      );
    }
  }
export default Signinform;
