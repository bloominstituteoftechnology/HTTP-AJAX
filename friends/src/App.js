import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import axios from 'axios';

import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data,
      })
    })
  }
  render() {
    return (
      <div className="App">
      <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/about">About</NavLink>
      <NavLink exact to="/contact">Contact</NavLink>
      <NavLink exact to="/friends">Friends</NavLink>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      {/* <Route exact path='/friends' render={} /> */}
      </div> 
    );
  }
}

export default App;
