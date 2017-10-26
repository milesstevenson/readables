import React, { Component } from 'react';
import './ReadablesContentArea.css';
import ReadablesContentPreview from './ReadablesContentPreview.js';
import { api } from './api.js';

export default class ReadablesContentArea extends Component {

  state = {
    posts: []
  }
  
  componentWillMount() {
    const posts = api.getPosts()
	  .then((results) => {
	    this.setState({ posts : results });
	    debugger;
	  })
	  .catch((err) => {
	    console.log(err);
	  });
  }

  setupPosts() {
    const posts = this.state.posts.map((p) => {
      debugger;
      return (
	<ReadablesContentPreview key={p.id}
	  postDetails={p}
	  />
      );
    });
    return posts;
  }
  
  render() {
    /**
     TODO: There needs to be a way to dynamically populate an array of
     posts here. Add AND Remove!
     **/
    return (
      <div className="contentArea">
	{ this.setupPosts() }
      </div>
    );
  }
}
