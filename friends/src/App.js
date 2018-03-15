import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
    }
  }
  render() {
    return (
      <div className="App">
        {
          
          /* {this.state.friends.map(friend => {
          return(
            <div>
             <div>{friend.name}</div>
             <div>{friend.age}</div>
             <div>{friend.email}</div>
            </div>
          )
        })} */}
        
        <Router>
        <Route path="/" component={FriendsList} />
        
        </Router>
      </div>
      
    );
  }
  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err))
  }
  
}

export default App;
