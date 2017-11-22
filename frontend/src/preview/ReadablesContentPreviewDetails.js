import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';

const styles = theme => ({
  contentPreview: {
    marginTop: 5
  },
  footerArea: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'purple',
      display: 'none'
    }
  },
  footerItem: {
     margin: theme.spacing.unit
  }
});

function ReadablesContentPreviewDetails(props) {
  const { classes } = props;
  const { postDetails } = props;
  
  return (
    <Grid container
	  className={classes.contentPreview}
	  direction="column">
      <Grid item>
	<Typography type="headline">
	  { postDetails.title }
	</Typography>
      </Grid>
      <Grid item className={classes.footerArea}>
	<Grid container justify="space-between">
	  <Grid item xs={2} className={classes.footerItem}>
	    <Chip label={`by ${postDetails.author}`}/>
	  </Grid>
	  <Grid item xs={2}>Me Too!</Grid>
	  <Grid item xs={2} className={classes.footerItem}>
	    <Chip label={postDetails.category}/>
	  </Grid>
	  <Grid item xs={3}>
	    <IconButton color="cyan">
	      <AddCircleIcon/>
	    </IconButton>
	    <IconButton color="accent">
	      <RemoveCircleIcon/>
	    </IconButton>
	  </Grid>
	</Grid>
      </Grid>
    </Grid>
  );
}

ReadablesContentPreviewDetails.propTypes = {
  postDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(ReadablesContentPreviewDetails);