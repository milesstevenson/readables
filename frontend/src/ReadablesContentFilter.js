import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { api } from './api.js';

export default class ReadablesContentFilter extends Component {
  state = {
    categories: []
  };
  
  componentWillMount() {
    const categories = api.getCategories()
	  .then((response) => {
	    const contentType = response.headers.get("content-type");
	    debugger;
	    if (contentType && contentType.includes("application/json"))
	    {
	      return response.json();
	    }
	    throw new TypeError("Oops, we haven't got JSON!");
	  })
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
      return (
	<ListItem
	  primaryText={c.name}
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
