import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import Friend from './Friend';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      visible: true,
      showId: null
    }  
  }

 componentDidMount(){
   this.refresh()
}

refresh = () => {
  Axios.get('http://localhost:5000/friends')
  .then(response => this.setState({friends: response.data}))
  .catch(err => console.log(err));
 }

 postFriend = (friend) => {
    Axios.post('http://localhost:5000/friends', friend)
    .then(response =>{
      console.log(response)
    })
    .then( response => {
      const newFriends = this.state.friends;
      newFriends.push(friend)
      this.setState( { friends: newFriends } )
    })
    .catch(error => {
      console.log(error);
    })
 }
 
 deleteFriend = (id) => {
   Axios.delete(`http://localhost:5000/friends/${id}`)
   .then(response => {
     console.log(response)
    })
    .then(response => {
      this.refresh()
    })
   .catch(error => {
     console.log(error)
   })
 }

 updateFriend = (friend) => {
   Axios.put(`http://localhost:5000/friends/${this.state.showId}`, friend)
   .then(response => {
    console.log(friend , this.state.showId)
    this.refresh()
    this.setState({visible: true})
   })
   .catch(error => {
    console.log(error)
   })
 }

 showForm = (id) => { 
  this.setState({visible: false, showId: id})

 }
 hideForm = (e) => this.setState({visible: true})
 
  render() { 
    return ( 
      <div className="App">
        <h1>Friends List</h1>
        {this.state.visible ? <Route exact path="/" render={(props) => <AddFriend friends={this.state.friends} postFriend={this.postFriend}/>} /> :
        <Route exact path="/" render={(props) => <UpdateFriend friends={this.state.friends} hideForm={this.hideForm} updateFriend={this.updateFriend}/>} />}
        <div className="friend-container">
          {this.state.friends.map((person) => (
            <Friend key={person.id} friend={person} deleteFriend={this.deleteFriend} showForm={this.showForm} />
          ))}
        </div>
      </div>
     );
  }
}

export default App;
