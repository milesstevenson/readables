import React, { Component } from 'react';
import logo from './logo.svg';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class ReadablesHeader extends Component {
  render() {
    const style = {
      
    };
    
    return (
      <Toolbar style={{marginBottom: "20px"}}>
	  <ToolbarGroup style={{textAlign: "center", margin: "auto"}}>
	    <ToolbarTitle text="READABLES"/>
	  </ToolbarGroup>
	  <ToolbarGroup>
	    <RaisedButton label="Submit A Post" primary={true}/>
	  </ToolbarGroup>
	</Toolbar>
    );
  }
}
