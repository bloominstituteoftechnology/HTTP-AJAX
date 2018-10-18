import React, { Component } from 'react';
import './App.css';
import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendList : [],
      newFriend : {
        name : '',
        age : '',
        email : ''
      }
    }
  }

  onChangeHandler = e => {
    this.setState({
      newFriend : {
      ...this.state.newFriend,
      [e.target.name] : e.target.value
    }});
    
  }

  addNewFriend = e => {
    // e.stopPropagation();
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({friendList : response.data}))
      .catch(error => console.log(error));

    this.setState({newFriend : {
      name : '',
      age : '',
      email : '',
    }})
    
  }

  deleteFriend = (e , id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({friendList : response.data})
      })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => this.setState({friendList : response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">

        <FriendsList 
        addNewFriend={this.addNewFriend} 
        friendList={this.state.friendList}
        deleteFriend={this.deleteFriend}
        />

        <AddFriendForm 
          newFriend = {this.state.newFriend}
          onChangeHandler={this.onChangeHandler} 
          addNewFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
