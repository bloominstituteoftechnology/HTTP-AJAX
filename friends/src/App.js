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
        }, 1000)
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
        <NewFriendForm />

        <>
          {result}
        </>
      </AppContainer>

    )
  }

}

export default App;
