import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import Home from './home';
import About from './About';
import Contact from './Contact';
import Friendslist from './components/Friendslist';
import FriendProfile from './components/FriendProfile';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],

    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({
          friends: response.data
        })
      })
      .catch(err => {
        console.log('in catch', err)
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
          <NavLink to='/friends'>
            Friends
          </NavLink>
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route 
          exact path='/friends' 
          render={() => <Friendslist friends={this.state.friends} />} />
        <Route
          path='/friends/:id'
          render={props => (
            <FriendProfile friend={this.state.friends} {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
