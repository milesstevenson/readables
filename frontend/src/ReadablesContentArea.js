import React, { Component } from 'react';
import './ReadablesContentArea.css';
import { Divider, Segment, List } from 'semantic-ui-react';
import ReadablesContentPost from './ReadablesContentPost';

export default class ReadablesContentArea extends Component {  
  render() {
    return (
      <List>
	<ReadablesContentPost></ReadablesContentPost>
      </List>
    );
  }
}
