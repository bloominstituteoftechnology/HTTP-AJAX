import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TopBar from './components/TopBar.js';
import Home from './components/Home.js';
import Add from './components/add.js';

class App extends Component {
  render() {
    return (
<div className="App">
	<TopBar />
    <Route exact path="/" component={Home} />
	<Route path="/add_friend/" component={Add} />
</div>
    );
  }
}

export default App;
