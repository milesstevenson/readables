import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReadablesHeader from './ReadablesHeader.js';
import ReadablesContentArea from './ReadablesContentArea.js';
import ReadablesContentFilter from './ReadablesContentFilter';
import Row from 'react-flexbox-grid/lib/components/Row';
import Col from 'react-flexbox-grid/lib/components/Col';
import 'typeface-roboto';

class App extends Component {

  
  render() {

    const style = {
      display: 'inline-block'
    };
    
    return (
      <MuiThemeProvider>
	<div>
	  <Col>
	    <ReadablesHeader/>
	  </Col>
	  <div className="content">
	    <Row center="xs">
	      <Col xs>
		<ReadablesContentFilter/>
	      </Col>
	      <Col xs={6} sm={6} md={8} lg={10}>
		<ReadablesContentArea/>
	      </Col>
	    </Row>
	  </div>
	</div>
      </MuiThemeProvider>
    );
  }
}

export default App;

