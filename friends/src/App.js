import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendInput from './components/FriendInput';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount(){
    axios('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => { throw new Error(err) });
  }
  handleUpdateList = (friends) => {
    this.setState({
      friends,
    })
  }
  handleEditFriend = (name, age, email, id) => {
    axios.put(`http://localhost:5000/friends/${id}`, {
      name,
      age: Number(age),
      email
    })
      .then(res => this.setState({ friends: res.data }) )
      .catch(err => { throw new Error(err) });
  }
  handleDeleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => { throw new Error(err)});
  }
  render() {
    return (
      <div className="App">
        <FriendInput updateList={this.handleUpdateList} />
        <FriendsList friends={this.state.friends} 
          deleteFriend={this.handleDeleteFriend}
          editFriend={this.handleEditFriend} 
        />
      </div>
    );
  }
}

export default App;
