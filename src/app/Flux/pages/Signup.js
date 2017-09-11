import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import demo from './demo.js';

export default class Signup extends React.Component {

  navigate(){
    this.props.history.replaceState(null, '/demo');
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

     if (this.state.username.length < 3) {
       isError = true;
       errors.usernameError = "Username needs to be atleast 3 characters long";
     }

     if (this.state.email.indexOf("@") === -1) {
       isError = true;
       errors.emailError = "Requires valid email";
     }

     if (this.state.password.length < 6) {
       isError = true;
       errors.passwordError = "Password needs to be atleast 6 characters long";
     }

     if (this.state.password !== this.state.cpassword) {
     isError = true;
     errors.cpasswordError = "Both Passwords should be same.";
     this.setState({ cpassword: "" });
    }

    this.setState({
     ...this.state,
     ...errors
    });

    return isError;
   };

   handleReset = e => {
     e.preventDefault();
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
   }

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
      this.navigate();
     }
     else{
       console.log('error');
     }
   };

  render() {
     return (
       <MuiThemeProvider>
       <form id="myform"  className="container">
         <div>
           <fieldset className="container">
               <legend>Sign up Form</legend>

               <label><code>User Name</code></label><br />
               <TextField
               type="text"
               id="username"
               name="username"
               placeholder="e.g. Tony Stark"
               value={this.state.username}
               errorText={this.state.usernameError}
               onChange={e => this.change(e)}
               /><br /><br />

               <label><code>Contact</code></label><br />
               <TextField
                 id="contact"
                 type="number"
                 name="contact"
                 placeholder="Phone no.(optional)"
                 onChange={e => this.change(e)}
                 /><br /><br />

               <label><code>Email id</code></label><br />
               <TextField
                 errorText={this.state.emailError}
                 type="email"
                 id="email"
                 name="email"
                 pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                 placeholder="e.g. abc@xyz.com"
                 value={this.state.email}
                 onChange={e => this.change(e)}
                 /><br /><br />

               <label><code>Password</code></label><br />
               <TextField
                errorText={this.state.passwordError}
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password} onChange={e => this.change(e)} />
                 <br /><br />

               <label><code>Confirm Password</code></label><br />
               <TextField
                 errorText={this.state.cpasswordError}
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  placeholder="Same as metioned above."
                  value={this.state.cpassword}
                  onChange={e => this.change(e)}/><br /><br />

               <button type="submit" name="submit"
                onClick={e => this.onSubmit(e)}><code>Submit</code></button>|
               <button type="reset" onClick={e => this.handleReset(e)} value="Clear">Clear</button>
           </fieldset>
         </div>
       </form>
       </MuiThemeProvider>
      );
   }
}
