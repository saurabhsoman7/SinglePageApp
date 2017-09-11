import React from "react";
import PropTypes from 'prop-types';
import TextField from "material-ui/TextField";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Form extends React.Component {

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  state = {
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    cpassword: "",
    cpasswordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      emailError: "",
      passwordError: "",
      cpasswordError: ""
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    if (this.state.password.length < 2) {
      isError = true;
      errors.usernameError = "password needs to be atleast 2 characters long";
    }

    if (this.state.password !== this.state.cpassword) {
      isError = true;
      errors.cpasswordError = "Both Passwords should be same.";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        cpassword: "",
        cpasswordError: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        cpassword: ""
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.usernameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          type="password"
          floatingLabelFixed
        />
        <br />
        <TextField
          name="cpassword"
          hintText="Confirm Password"
          floatingLabelText="Confirm Password"
          value={this.state.cpassword}
          onChange={e => this.change(e)}
          errorText={this.state.cpasswordError}
          type="password"
          floatingLabelFixed
        />
        <br />
        <button label="Submit" type="submit" name="submit" id="register"
        onClick={e => this.onSubmit(e)}/>

      </form>
    );
  }
}
