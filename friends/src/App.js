import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsList.js'
import NewFriendForm from './components/NewFriendForm'
import EditFriend from './components/EditFriend'
import Loading from './components/Loading.js'
import './App.css';
import { FriendsHeader, AppContainer } from './components/styledComponents.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: null,
      isEditing: false,
      editFriendId: 1
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

  showEditForm = (friendId) => {
    this.setState({
      isEditing: true,
      editFriendId: friendId
    })
  }




  render(){
    const result = (this.state.friends === null)
      ? <div><Loading /></div>
      : (!this.state.isEditing)
      ? <div className='App'>
          <FriendsHeader>
              FRIENDS
          </FriendsHeader>
          <NewFriendForm addFriend={this.addFriend}/>
          <FriendsList
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
            showEditForm={this.showEditForm}
            />
        </div>
      : <div>
          <EditFriend friends={this.state.friends} editFriendId={this.state.editFriendId}/>
        </div>


    return (
      <AppContainer>

        <>
          {result}
        </>

      </AppContainer>
    )
  }

}

export default App;
