import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ReadablesContentVoting from '../common/ReadablesContentVoting.js';
import ReadablesContentPreviewDetails from './ReadablesContentPreviewDetails.js';

const styles = theme => ({
  paper: {
    height: 120,
    width: '80%',
    marginBottom: 20,
    [theme.breakpoints.down('lg')]: {
      height: 160
    },
    [theme.breakpoints.down('sm')]: {
      height: 190
    },
    [theme.breakpoints.down('xs')]: {
      height: 120,
      width: '100%'
    }
  },
  voting: {
    alignItems: "flex-start"
  }
});

function ReadablesContentPreview(props) {
  const { classes } = props;
  const { postDetails } = props;
  
  return (
    <Paper className={classes.paper}>
      <Grid container>
	<Grid item xs={1} className={classes.voting}>
	  <ReadablesContentVoting voteScore={postDetails.voteScore}/>
	</Grid>
	<Grid item xs={11}>
	  <ReadablesContentPreviewDetails postDetails={postDetails}/>
	</Grid>
      </Grid>
      </Paper>
  );
}

export default withStyles(styles)(ReadablesContentPreview);
