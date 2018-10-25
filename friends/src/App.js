import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsList.js'
import NewFriendForm from './components/NewFriendForm'
import Loading from './components/Loading.js'
import './App.css';
import { FriendsHeader, AppContainer } from './components/styledComponents.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: null
    }
  }

  componentDidMount(){

    axios.get("http://localhost:5000/friends")
      .then(response =>{
        //create mock loading time
        window.setTimeout(()=>{
          this.setState({
            friends: response.data
          })
        }, 500)
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  addFriend = (friend) =>{
    axios.post("http://localhost:5000/friends", friend)
      .then((response) => {
        this.setState({
          friends: response.data
        })
      })
      .catch((err) =>{
        console.log(err)
      })

  }

  deleteFriend = (friendId) => {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then((response) => {
        this.setState({
          friends: response.data
        })
      }).catch((err) => {
        console.log(err);
      });
  }


  render(){
    const result = (this.state.friends === null)
      ? <div><Loading /></div>
      : <div className="App">
          <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend}/>
        </div>

    return (
      <AppContainer>
        <FriendsHeader>
            FRIENDS
        </FriendsHeader>
        <NewFriendForm addFriend={this.addFriend}/>

        <>
          {result}
        </>
      </AppContainer>

    )
  }

}

export default App;
