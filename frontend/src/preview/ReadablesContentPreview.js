import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import ReadablesContentVoting from '../common/ReadablesContentVoting.js';

const styles = theme => ({
  paper: {
    height: 100,
    width: '80%',
    marginBottom: 20
  },
  voting: {
    alignItems: "flex-start"
  },
  
  contentPreview: {
    marginTop: 5
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function componentWillMount() {
  console.log("Fooooo");
}

function ReadablesContentPreview(props) {

    /**
     TODO: Add upvote/downvote icons, number of comments, author
    */

  const { classes } = props;
  const { postDetails } = props;
  
  return (
    <Paper className={classes.paper}>
      <Grid container>
	<Grid item xs={1} lg={3} className={classes.voting}>
	  <ReadablesContentVoting voteScore={postDetails.voteScore}/>
	</Grid>
	<Grid item xs={11} lg={9}>
	  <Grid container
		className={classes.contentPreview}
		direction="column">
	    <Grid item>
	      <Typography type="headline">
		{ postDetails.title }
	      </Typography>
	    </Grid>
	    <Grid item xs={9}>
	      <Grid container justify="space-between">
		<Grid item xs={1} className={classes.chip}><Chip label={`by ${postDetails.author}`}/></Grid>
		<Grid item xs={1}>Me Too!</Grid>
		<Grid item xs={1} className={classes.chip}>
		  <Chip label={postDetails.category}/>
		</Grid>
		<Grid item xs={3} className={classes.chip}>
		  <IconButton color="accent">
		    <DeleteIcon/>
		  </IconButton>
		</Grid>
	      </Grid>
	    </Grid>
	  </Grid>
	</Grid>
      </Grid>
      </Paper>
  );
}

ReadablesContentPreview.propTypes = {
  postDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(ReadablesContentPreview);
