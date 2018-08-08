import React, { Component } from 'react';
import FriendsList from './Components/FriendsList'; 
import axios from 'axios'; 
import NewFriendForm from './Components/NewFriendForm'; 

import './App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      friendsData: [], 
      loading: true,
      name: null, 
      age: null, 
      email: null
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends").then(friends => {
      this.setState({
        friendsData: friends.data, 
        loading: false
      })
    })
  }

  changeNameHandler = (event) => {
      this.setState({
        name : event.target.value
      })
  }

  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  changeAgeHandler  = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  submitClickHandler = (event) => {
    event.preventDefault(); 
    const friend = {
      name: this.state.name,
      age: Number(this.state.age), 
      email: this.state.email
    }
    axios.post("http://localhost:5000/friends", friend).then(friends => {
      this.setState({
        friendsData: friends.data
      }) 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts Application</h1>
        <NewFriendForm
        changeEmail = {this.changeEmailHandler}
        changeAge = {this.changeAgeHandler}
        changeName = {this.changeNameHandler}
        click = {this.submitClickHandler}/>
        <FriendsList friends = {this.state.friendsData} />
      </div>
    );
  }
}

export default App;
