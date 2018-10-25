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
      friends: []
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
  }

  addFriend = (friend) =>{
    axios.post("http://localhost:5000/friends", friend)
      .then((response) => {
        this.setState({
          friends: response.data
        })
      })

  }


  render(){
    const result = (!this.state.friends.length)
      ? <div><Loading /></div>
      : <div className="App">
          <FriendsList friends={this.state.friends}/>
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
