import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

export default class ReadablesContentPreview extends Component {
  render() {
    const style = {
      height: 100,
      width: '80%',
      marginBottom: 20
    };

    /**
     TODO: Add upvote/downvote icons, number of comments, author
    */
    
    return (
      <Paper style={style} zDepth={2}>
	
      </Paper>
    );
  }
}

ReadablesContentPreview.propTypes = {
  postDetails: PropTypes.object.isRequired
};
