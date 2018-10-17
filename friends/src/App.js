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
      newFriend : {}
    }
  }

  onChangeHandler = e => {
    this.setState({
      newFriend : {
      // ...this.friendList,
      ...this.state.newFriend,
      [e.target.name] : e.target.value
    }});
    
  }

  addNewFriend = e => {
    e.stopPropagation();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({friendList : response.data}))
      .catch(error => console.log(error))
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
        onChangeHandler={this.onChangeHandler} 
        friendList={this.state.friendList}
        />

        <AddFriendForm />
      </div>
    );
  }
}

export default App;
