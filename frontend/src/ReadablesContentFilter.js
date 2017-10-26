import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { api } from './api.js';

export default class ReadablesContentFilter extends Component {
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
	<ListItem key={name}
	  primaryText={name}
	  />
      );
    });
    return categories;
  }
  
  render() {
    return (
      <List>
	{ this.setupCategories() }
      </List>
    );
  }
}
