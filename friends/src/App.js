import React, { Component } from 'react';
import axios from "axios";
import Friends from './components/friends/Friends';
import FriendsForm from './components/friends/FriendsForm';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true,
      name: '',
      age: null,
      email: ''

    }
  }

  
  componentDidMount(){
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState(() => ({friends: response.data, loading: false
      }))
    })
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }



  addNewFriend = () =>{
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

  axios
  .post("http://localhost:5000/friends", newFriend)
  .then(response => {
      this.setState({
      friends: response.data
    })
  })
  .catch((err) => console.log(err))
}


  render() {
    console.log(this.state.name);
    console.log(this.state.friends);
    return (
      <div className="app">
        {this.state.friends.map(friend => <Friends key={friend.id} friend={friend}/>)} 
          <FriendsForm 
          inputHandler={this.inputHandler}
          addNewFriend={this.addNewFriend}
          value={this.state}
          />      
      </div>
    );
  }
}

