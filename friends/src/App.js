import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitForm from './Components/SubmitForm';
import FriendsComponent from './Components/FriendsComponent';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Update from './Components/Update';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  } 
  
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({friends});
      })
      .catch(error => console.log(error))
  }
  
  handleSubmit = (noNewFriendsOnlyAcquaintences) => {
    axios.post("http://localhost:5000/friends", noNewFriendsOnlyAcquaintences)
    .then(res => {
      const friends = res.data;
      this.setState({friends});
    }) 
    .catch(error => console.log(error))
  }
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err));
}

updateFriend = (obj) => {
  const updatedFriend = {
      name: obj.name,
      age: obj.age,
      email: obj.email
  }
  axios.put(`http://localhost:5000/friends/${obj.id}`, updatedFriend)

  .then(res => {
    this.setState({friends: res.data})
  })
  .catch(err => console.log(err));
} 

  render() {
    const {friends} = this.state
    console.log(friends)
    return (
      <div className="App">
        <SubmitForm handleSubmit={this.handleSubmit}/>
        <FriendsComponent deleteFriend={this.deleteFriend} friends={friends}/>
        <Route path="/update/:id" render={(props) => <Update {...props} updateFriend={this.updateFriend} friends={friends}/>} />
      </div>
    );
  }
}

export default App;
