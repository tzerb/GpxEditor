import * as React from 'react'
import { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <IndexLink to="/">HomeApp</IndexLink>
        {' | '}
        <Link to="/GetGpxFilePage">GetGpxFilePage</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
} 

export default App;
