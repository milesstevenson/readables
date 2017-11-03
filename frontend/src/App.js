import React, { Component } from 'react';
import ReadablesHeader from './ReadablesHeader.js';
import ReadablesContentArea from './ReadablesContentArea.js';
import ReadablesContentFilter from './ReadablesContentFilter';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import 'typeface-roboto';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;
    
    return (
	<div>
	  <ReadablesHeader/>
	  <Grid container className={classes.root}>
	    <Grid item xs={3}>
	      <ReadablesContentFilter/>
	    </Grid>
	    <Grid item xs={9}>
	      <ReadablesContentArea/>
	    </Grid>
	  </Grid>
	</div>
    );
  }
}

export default withStyles(styles)(App);

