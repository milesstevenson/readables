import React, { Component } from 'react';
import './ReadablesContentArea.css';
import ReadablesContentPreview from './ReadablesContentPreview.js';


export default class ReadablesContentArea extends Component {

  componentWillMount() {
    debugger;
  }
  
  render() {
    /**
     TODO: There needs to be a way to dynamically populate an array of
     posts here. Add AND Remove!
     **/
    return (
      <div className="contentArea">
	<ReadablesContentPreview/>
	<ReadablesContentPreview/>
	<ReadablesContentPreview/>
      </div>
    );
  }
}
