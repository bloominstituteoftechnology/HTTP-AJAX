import React, { Component } from 'react';
import axios from 'axios';
import HomePage from './Homepage';
import { Route } from 'react-router-dom';
import './App.css';
import FriendList from './Friendlist';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendlist: []
    };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friendlist: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }

 
  

  render() {
    console.log(this.state.friendlist)
    return (
      <div className="App">
        <Route exact path="/" render={(props) => <HomePage {...props} newFriend={this.newFriend} />} />
        <Route path="/friendlist/" render={(props) => <FriendList {...props} friends={this.state.friendlist} />} />
      </div>
    );
  }
}

export default App;
