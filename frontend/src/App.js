import React, { Component } from 'react';
import ReadablesHeader from './ReadablesHeader';
import ReadablesContentArea from './ReadablesContentArea';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	<ReadablesHeader/>
	<ReadablesContentArea/>
      </div>
    );
  }
}

export default App;

