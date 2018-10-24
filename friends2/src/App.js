import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      friends: [],
    }
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then( response => {
        this.setState({friends: response.data})
        console.log(this.state.friends)
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
        {this.state.friends.map((friend) => {
          return (
          <Route path="/" render={(props) => <FriendsList name={friend.name} age={friend.age} email={friend.email} id={friend.id} /> } /> 
          )
        })
    
        }
      </div>
    );
  }
}


export default App;
