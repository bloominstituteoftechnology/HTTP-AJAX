import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendCard from './components/FriendCard';
import AddFriend from './components/AddFriend';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  addFriend = (name, age, email)=>{
    const friend = {
      id: this.state.friends[this.state.friends.length - 1].id + 1,
      name: name,
      age: parseInt(age),
      email: email
    }

    const tempArray = this.state.friends;
    tempArray.push(friend);

    axios.post('http://localhost:5000/friends', friend)
    .then((response)=>{
      this.setState({
        friends: response.data
      })
    })
    .catch((error)=>{
      console.log("Error:", error);
    })
  }

  parseFriend = (id)=>{
    const test = this.state.friends.find(friend=>{
      return `${friend.id}` === id;
    });
    return test;
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends</h1>
        <Route exact path="/" render={(props)=><FriendsList friends={this.state.friends}/>}/>
        <Route path="/:id" render={(props)=><FriendCard friend={this.parseFriend(props.match.params.id)} update delete/>}/>
        <Route path="/addfriend" render={()=><AddFriend addFriend={this.addFriend}/>}/>
      </div>
    );
  }
}

export default App;
