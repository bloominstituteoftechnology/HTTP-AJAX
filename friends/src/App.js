import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

class App extends Component {
  constructor() {
    super();

    this.state = {
        friends: [],
        name: '',
        age: null,
        email: '',
    };
  }

  // componentDidMount() {
  //   axios
  //       .get('http://localhost:5000/friends')
  //       .then(res => {
  //           console.log('Response', res.data)
  //           this.setState(() => ({ friends: res.data }));
  //       })
  //       .catch(error => {
  //       console.error('Server Error', error);
  //       });
  // }

  saveFriend = () => {
    const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    }
    axios
        .post(`/friends`, newFriend)
        .then(response => console.log(response))
        .catch(err => console.log(err));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <FriendsList />
        <AddFriend handleChange={this.handleChange} saveFriend={this.saveFriend}/>
      </div>
    );
  }
}

export default App;
