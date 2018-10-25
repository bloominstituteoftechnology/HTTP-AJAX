import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendCard from './components/FriendCard';
import AddFriend from './components/AddFriend';
import UpdateFriendCard from './components/UpdateFriendCard';

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

  deleteFriend = (id)=>{
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log("Error:", error);
    })
  }

  updateFriend = (id, friend)=>{
    console.log(id, friend);
    axios.put(`http://localhost:5000/friends/${id}`, friend)
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log(error);
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
        <Link to="/">Home</Link>
        <Route exact path="/" render={(props)=><FriendsList friends={this.state.friends}/>}/>
        <Route exact path="/:id" render={(props)=><FriendCard friend={this.parseFriend(props.match.params.id)} deleteFriend={this.deleteFriend} update delete/>}/>
        <Route path="/addfriend" render={()=><AddFriend addFriend={this.addFriend}/>}/>
        <Route path="/:id/update" render={(props)=><UpdateFriendCard friend={this.parseFriend(props.match.params.id)} updateFriend={this.updateFriend}/>}/>
      </div>
    );
  }
}

export default App;
