import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateFriendsList = updatedFriendsList => {
    this.setState({ friends: updatedFriendsList});
  }

  deleteFromFriendsList = friendId => {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <FriendsList {...this.state} deleteFromFriendsList={this.deleteFromFriendsList}/>}/>
          <AddFriendForm updateFriendsList={this.updateFriendsList}/>
        </div>
      </Router>
    );
  }
}

export default App;
