import React from 'react';
import { Route, Link, hashHistory } from 'react-router';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import demo from './demo.js';
import PropTypes from 'prop-types';

export default class Login extends React.Component {

  navigate(){
    this.props.history.replaceState(null, '/demo');
  }

  state = {
    logmail: "",
    logmailError: "",
    password: "",
    passwordError: "",
  };

   change = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   };

   validation = () => {
     let isError = false;
     const errors = {
       logmailError: "",
       passwordError: "",
     };

     if (this.state.logmail.indexOf("@") === -1) {
       isError = true;
       errors.logmailError = "Requires valid email";
     }

     if (this.state.password.length < 6) {
       isError = true;
       errors.passwordError = "Password needs to be atleast 6 characters long";
     }

    this.setState({
     ...this.state,
     ...errors
    });

    return isError;
   };

   submit = e => {
     e.preventDefault();
     // this.props.onSubmit(this.state);
     const err = this.validation();

     if (!err) {
       // clear form
       this.setState({
         logmail: "",
         logmailError: "",
         password: "",
         passwordError: "",
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
         <div className="container">
           <label>Email id</label><br />
           <TextField
             errorText={this.state.logmailError}
             type="email"
             id="logmail"
             name="logmail"
             pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
             placeholder="e.g. abc@xyz.com"
             value={this.state.logmail}
             onChange={e => this.change(e)}
             /><br /><br />

           <label>Password</label><br />
           <TextField
            errorText={this.state.passwordError}
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password} onChange={e => this.change(e)} />
             <br /><br />

           <button onClick={e => this.submit(e)}
            type="submit" onClick={this.submit}>Login</button>
         </div>
       </MuiThemeProvider>
     );
   }
}
