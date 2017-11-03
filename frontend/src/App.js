import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReadablesHeader from './ReadablesHeader.js';
import ReadablesContentArea from './ReadablesContentArea.js';
import ReadablesContentFilter from './ReadablesContentFilter';
import Flexbox from 'flexbox-react';
import 'typeface-roboto';

class App extends Component {

  render() {
    
    return (

	<div>
	  <ReadablesHeader/>
	  <ReadablesContentFilter/>
	  <ReadablesContentArea/>
	</div>

    );
  }
}

export default App;

