import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  flex: {
    flex: 1
  }
});

function ReadablesHeader(props) {
  const { classes } = props;
  return (
      <AppBar position="static">
	<Toolbar>
	  <Typography type="title" color="inherit" className={classes.flex}>
	    READABLES
	  </Typography>
	  <Button raised>
	    Submit A Post
	  </Button>
	</Toolbar>
      </AppBar>      
    );
}

export default withStyles(styles)(ReadablesHeader);
