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
  handleDeleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => { throw new Error(err)});
  }
  render() {
    return (
      <div className="App">
        <FriendInput updateList={this.handleUpdateList} />
        <FriendsList friends={this.state.friends} deleteFriend={this.handleDeleteFriend} />
      </div>
    );
  }
}

export default App;
