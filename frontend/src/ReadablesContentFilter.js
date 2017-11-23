import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import { api } from './api.js';

const styles = theme => ({
  list: {
    width: '50%',
    background: theme.palette.background.paper
  }
});

class ReadablesContentFilter extends Component {
  state = {
    categories: []
  };
  
  componentWillMount() {
    const categories = api.getCategories()
	  .then((results) => {
	    const { categories } = results;
	    this.setState({categories: categories});
	    console.log(results);
	  })
	  .catch((err) => {
	    console.log(err);
	  });
  }

  setupCategories() {
    const categories = this.state.categories.map((c) => {
      const { name } = c;
      return (
	<ListItem key={name}>
	  {name}
	</ListItem>
      );
    });
    return categories;
  }
  
  render(props) {
    const { classes } = this.props;
    
    return (
      <List className={classes.list}>
	{ this.setupCategories() }
      </List>
    );
  }
}

export default withStyles(styles)(ReadablesContentFilter);
