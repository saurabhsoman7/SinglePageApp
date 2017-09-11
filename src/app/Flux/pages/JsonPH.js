import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, withRouter } from 'react-router';
import axios from 'axios';
import demo from './demo.js';
export default class JsonPH extends React.Component {

  navigate(){
    this.props.history.replaceState(null, '/demo');
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   postItems: []
    // };
  }

  handleClick(){
    this.navigate();
  };

  // componentDidMount(){
  //   axios.get()
  //     .then
  // }

  render() {
    console.log('json1', this.props.Title);
    return (
      <div className="JsonPH">
        <button type="reset" onClick={this.handleClick.bind(this)}>Back</button>
      </div>
    );
  }
}
