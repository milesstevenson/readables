import React, { Component } from 'react';
import { Header, Menu, Segment, Icon } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

export default class ReadablesHeader extends Component {
  state = { activeItem: 'top' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { activeItem } = this.state;
    
    return (
      <Segment inverted>
	<Menu inverted pointing secondary>
	  <Menu.Item name='top' active={activeItem === 'top'} onClick={this.handleItemClick}/>
	  <Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick}/>
	  <Menu.Item name='show' active={activeItem === 'show'} onClick={this.handleItemClick}/>
	  <Menu.Item name='ask' active={activeItem === 'ask'} onClick={this.handleItemClick}/>
	  <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick}/>
	  <Menu.Item name='submit' onClick={this.handleItemClick}/>
	</Menu>
      </Segment>
    );
  }
}
