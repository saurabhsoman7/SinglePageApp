import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import axios from 'axios';
import JsonPH from './JsonPH';

export default class FetchDemo extends React.Component {

  navigate(){
    this.props.history.replaceState(null, '/JsonPH');
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      posts: [],
      post: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        var data = res.data;
        const posts = data.map(obj => obj);
        this.setState({ posts });
        console.log(posts);
    });
  }

  handleClick(post){
    const { id, title, userId, body } = post;
    console.log( id, title, userId, body);
    this.setState({post});
    //console.log('here', post);
  };

  // change = post => {
  //   this.props.onChange({ [e.target.title]: e.target.value });
  //   this.setState({
  //     [e.target.title]: e.target.value
  //   });
  // };

  render() {
    return (
      <div className="demo">
        <p>Title: {this.state.post.title} Id: {this.state.post.id}</p>
        <p>User Id: {this.state.post.userId}</p>
        <p>Body: {this.state.post.body}</p>
        <ul>
          {this.state.posts.map(post =>
            <Link to="demo">
            <li ref="text" key={post.id} value={this.props.post}
             onClick={this.handleClick.bind(this, post)}>{post.title}</li></Link>
          )}
        </ul>
        {this.state.post.userId}

      </div>
    );
  }
}
