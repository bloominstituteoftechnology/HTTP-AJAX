import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newFriends: {
        age: Number(''),
        name: '',
        email: ''
      },
      editingID: '',
      activeFriend: null,
      isEditing: false
    }
  }

// let blankField = {
//     age: Number(''),
//     name: '',
//     email: ''
// };

componentDidMount() {
  axios.get('http://localhost:5000/friends')
    .then(response => this.setState({items: response.data}))
    .catch(error => console.log(error));
}

changeHandler = event => {
  this.setState({
      newFriends: {
          ...this.state.newFriends,
          [event.target.name]: event.target.value
      }
  });
}

addFriend = () => {
  axios.post('http://localhost:5000/friends', 
  // this.state.newFriends
  )
      .then(response => this.setState({items: response.data}))
      .catch(error => console.log(error))
}

deleteFriend = (event, id) => {
event.preventDefault();
axios.delete(`http://localhost:5000/friends/${id}`)
  .then(reponse => {
    this.setState({items: reponse.data})
  })
  .catch(error => console.log(error))
}

updateItem = () => {
axios.put(`http://localhost:5000/friends/${this.state.editingID}`, this.state.item)
.then(reponse => this.setState({
  items: reponse.data, editingID: null, 
  // item: blankField,
}))
.catch(error => console.log(error))
}

// setUpdateForm = (event, friend) => {
//   event.preventDefault();
//   this.setState({
//     newFriends,
//     isEditing: true,
//     editingID: friend.id,
//   })
// }

  render() {
    return (
      <div className="App">

      <Route
      exact path = "/"
      render = {props => (
        <Home {...props}
        items = {this.state.items}
        newFriends = {this.state.newFriends}
        addFriend = {this.addFriend}
        deleteFriend = {this.deleteFriend}
        changeHandler = {this.changeHandler}
        />
      )} />

      <Route
      path = "/friendslist"
      render = {props => (
        <FriendsList {...props}
        items = {this.state.items}
        newFriends = {this.state.newFriends}
        addFriend = {this.addFriend}
        deleteFriend = {this.deleteFriend}
        changeHandler = {this.changeHandler}
        setUpdateForm = {this.setUpdateForm}
        />
      )} />
      </div>
    );
  }
}

export default App;
