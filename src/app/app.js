import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './components/Layout';
ReactDOM.render(<App />, document.getElementById('app'));*/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import BootStrapApp from './Flux/BootStrapLayout';
import Features from './Flux/pages/Features';
import Login from './Flux/pages/Login';
import Welcome from './Flux/pages/Home';
import Signup from './Flux/pages/Signup';
import demo from './Flux/pages/demo';
import JsonPH from './Flux/pages/JsonPH';


const app = document.getElementById('app');

//Render componenets as per selected link
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={BootStrapApp}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path="features" component={Features}></Route>
      <Route path="features/:category" component={Features}></Route>
      <Route path="Login" component={Login}></Route>
			<Route path="signup" component={Signup}></Route>
			<Route path="demo" component={demo}></Route>
			<Route path="JsonPH" component={JsonPH}></Route>
		</Route>
	</Router>,
app );
