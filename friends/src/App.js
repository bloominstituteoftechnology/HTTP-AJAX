import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/friendList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      }
      )
      .catch(error => console.log('It\'s over! Turn back now!'))
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friends => (
        <FriendList key={friends.id} friends = {friends} />
      ))}
        {/* <nav> */}
        
            {/* <NavLink exact to = '/'>
              Friends List
            </NavLink>
        </nav>

        <Route exact path = '/' component = {FriendList} /> */}
        
      </div>
    );
  }
}

export default App;
