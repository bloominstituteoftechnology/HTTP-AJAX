import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import axios from 'axios';

import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import FriendList from './Friendlist';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
    //Asking for info from the local server
    .get('http://localhost:5000/friends')
    //then gets the response and using the callback function sets the friends object in the state to the response data
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
      {/* nav bar structure */}
      <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/about">About</NavLink>
      <NavLink exact to="/contact">Contact</NavLink>
      <NavLink exact to="/friends">Friends</NavLink>
      </nav>
      {/* routes */}
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      {/* Render Routes : this routes pass props to the components */}
      <Route exact path='/friends' render={() => <FriendList friends={this.state.friends} />} />
      </div> 
    );
  }
}

export default App;
