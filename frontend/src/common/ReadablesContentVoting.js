import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  upVote: {
    top: 10
  },
  downVote: {
    bottom: 10
  },
  score: {
    marginLeft: 5
  }
});

function ReadablesContentVoting(props) {
  const { classes } = props;
  const { voteScore } = props;

  return (
    <Grid container
	  direction="column"
	  justify="center"
	  alignItems="center">
      <IconButton className={classes.upVote}>
	<ExpandLessIcon/>
      </IconButton>
      <Chip label={ voteScore } className={classes.score}/>
      <IconButton className={classes.downVote}>
	<ExpandMoreIcon/>
      </IconButton>
    </Grid>
  );
}

export default withStyles(styles)(ReadablesContentVoting);
