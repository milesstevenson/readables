import React, { Component } from 'react';
import ReadablesHeader from './ReadablesHeader.js';
import ReadablesContentArea from './ReadablesContentArea.js';
import ReadablesContentFilter from './ReadablesContentFilter';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import 'typeface-roboto';


const styles = theme => ({
  app: {
    background: theme.palette.background.paper
  },
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  filter: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;
    
    return (
      <div className={classes.app}>
	  <ReadablesHeader/>
	  <Grid container className={classes.root}>
	    <Grid item xs md className={classes.filter}>
	      <ReadablesContentFilter/>
	    </Grid>
	    <Grid item xs={12} md={9}>
	      <ReadablesContentArea/>
	    </Grid>
	  </Grid>
	</div>
    );
  }
}

export default withStyles(styles)(App);

