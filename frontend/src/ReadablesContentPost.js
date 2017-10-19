import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

export default class ReadablesContentPost extends Component {
  render() {
    const foo = 100, numOfComments = 50;
    return (
	<List.Item>
	  <List.Content>
	    <List.Header as='a'>
	      	I'm an item in this list
	    </List.Header>
	    <List horizontal>
	      <List.Item>{`${foo} points ${numOfComments} comments`}</List.Item>
	    </List>
	  </List.Content>
	</List.Item>
    );
  }
}
