import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import SubmitNewFriend from './components/SubmitNewFriend';
import EditFriend from './components/EditFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: null,
      email: ""
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => {
            this.setState({friends: response.data})
        })
        .catch(err => {
            console.log(err);
        })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  addNewFriend = event => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post("http://localhost:5000/friends", newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }

  removeFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Link to="/edit"><button>Edit</button></Link>
        <Route path="/edit" component={<EditFriend />} />
        <Link to="/SubmitNewFriend"><button>Add a Friend!</button></Link>
        <Route
          path="/SubmitNewFriend"
          render={props => (
            <SubmitNewFriend
              {...props}
              name={this.state.name} 
              age={this.state.age} 
              email={this.state.email} 
              handleChange={this.handleChange} 
              addNewFriend={this.addNewFriend} 
            />
          )}
        />
        
        <Route 
          exact
          path="/" 
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              name={this.state.name} 
              age={this.state.age} 
              email={this.state.email} 
              removeFriend={this.removeFriend}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
