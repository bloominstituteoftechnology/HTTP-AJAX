import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Route exact path = "/" component={Friends} />
        {/* <Route path="/friends/:id" render={} */}
      </div>
    );
  }
}

export default App;