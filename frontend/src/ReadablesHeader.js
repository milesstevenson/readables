import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import ReadablesCreatePostDialog from './ReadablesCreatePostDialog.js';

const styles = theme => ({
  flex: {
    flex: 1
  }
});

class ReadablesHeader extends Component {

  state = {
    open: false,
    tag: ''
  };
  
  handleClickOpen = () => {
    this.setState({ open: true });
  }
  
  render() {
    const { classes, fullScreen } = this.props;
    
    return (
      <AppBar position="static">
	<Toolbar>
	  <Typography type="title" color="inherit" className={classes.flex}>
	    READABLES
	  </Typography>
	  <Button
	    onClick={this.handleClickOpen}
	    raised>
	    Submit A Post
	  </Button>
	  <ReadablesCreatePostDialog dialogOpen={this.state.open}/>
	</Toolbar>
      </AppBar>      
    );
  }
}

export default withStyles(styles)(ReadablesHeader);

