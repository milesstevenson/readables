import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';

const styles = theme => ({
  paper: {
    height: 100,
    width: '80%',
    marginBottom: 20
  }
});

function ReadablesContentPreview(props) {

    /**
     TODO: Add upvote/downvote icons, number of comments, author
    */

  const { classes } = props;
  
  return (
    <Paper className={classes.paper}>
      
    </Paper>
  );
}

ReadablesContentPreview.propTypes = {
  postDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(ReadablesContentPreview);
