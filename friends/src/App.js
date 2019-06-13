import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : [],
      newFriend: {
        name: '',
        age: null,
        email: ''
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(response => this.setState({friends: response.data}))
         .catch(error => console.log(error))
  }

  addHandler = event => {
    
    this.setState({ 
      newFriend: {
      ...this.state.newFriend,
      [event.target.name] : event.target.value
      }
    })
  }

 addNewFriend = (event) => {
   event.preventDefault();
   axios.post('http://localhost:5000/friends', this.state.newFriend)
              .then(response => this.setState({ friends: response.data}))
              .catch(err => {
                console.log(err)
              })
 }

 deleteFriend = (event, friendId) => {
   console.log(friendId)
   event.preventDefault();
   axios.delete(`http://localhost:5000/friends/${friendId}`)
   .then(response => this.setState({ friends: response.data}))
 }

editFriend = (event, friendId) => {
  event.preventDefault();
  axios.put(`http://localhost:5000/friends/${friendId}`, this.state.newFriend)
        .then(response => this.setState({
          friends: response.data
        }))
}



  render() {
    return (
      <div className="App">
      <NavLink exact to="/">Friend List</NavLink>
      <NavLink to="/friend-form">Friend Form</NavLink>
          <Route exact path = "/" render={props => (<FriendList {...props} friends={this.state.friends} editFriend={this.editFriend} deleteFriend={this.deleteFriend}/>) }/>
          <Route path = "/friend-form" render={props => (<FriendForm {...props} addHandler={this.addHandler} editFriend={this.editFriend} addNewFriend={this.addNewFriend} friend={this.state.friends} friends={this.state.newFriend}/>)} />
      </div>
    );
  }
}

export default App;