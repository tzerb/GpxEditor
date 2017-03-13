import * as React from 'react'
import { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

var MUI = require("material-ui");
var styles = require("material-ui/styles")
var colors = require("material-ui/styles/colors")

const muiTheme = styles.getMuiTheme({

});

// 
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component<undefined, undefined> {
  render() {
    return (      
      <MUI.MuiThemeProvider muiTheme={muiTheme}>

        <div>
          <IndexLink to="/">HomeApp</IndexLink>
          {' | '}
          <Link to="/GetGpxFilePage">GetGpxFilePage</Link>
          <br/>
          {this.props.children}
        </div>
      </MUI.MuiThemeProvider>
    );
  }
} 

export default App;
