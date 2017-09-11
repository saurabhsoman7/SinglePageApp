import React from 'react';
import { Link, hashHistory } from 'react-router';
import Login from './pages/Login';
import Welcome from './pages/Home';
import Signup from './pages/Signup';
import demo from './pages/demo';


export default class BootStrapApp extends React.Component {
  /* Function to navigate to home on click of home link*/
  navigate(){
    this.props.history.replaceState(null,'/');
  }

  //Function to render header content on page
   render() {
     const { location } = this.props;
     const homeActClass = location.pathname === "/" ? "nav-link active" : "nav-link";
     const loginActClass = location.pathname === "/login" ? "nav-link active" : "nav-link";
     const signinActClass = location.pathname === "/signup" ? "nav-link active" : "nav-link";

     return (
          <div>
            <div className="blog-masthead">
              <div className="container">
                <nav className="nav blog-nav">
                  <a className={homeActClass}  href="#" onClick={this.navigate.bind(this)}>Home </a>|
                  <Link to='login'><a className={loginActClass} href="#">Login </a></Link>|
                  <Link to='signup'><a className={signinActClass} href="#">Sign Up! </a></Link>
                </nav>
              </div>
            </div>
            <div className="blog-header">
              <div className="container">
        	     {this.props.children}
               </div>
            </div>

          </div>

      );
   }
}
