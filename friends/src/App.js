import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.url = 'http://localhost:5000/friends'
    this.state = {
      friendList: [],
    }
  }

  componentDidMount = () => {
    const friendRequest = axios.get(this.url);
    friendRequest.then(response => {
      this.setState({ friendList: response.data });
    }).catch(response => {
      console.log('Had issues with friends ', response)
    })
  }


  addNewFriend = (name, age, email)=> {
    let newFriend = {
      name: name,
      age: age,
      email: email,
    };
    axios
      .post(this.url, newFriend)
      .then(response => {
        this.setState({ friendList: response.data })
      })
      .catch(response => {
        console.log('Could not add friend ', response);
      });
  }

    editFriend = friend => {
      axios
        .put(`${this.url}/${friend.id}`, friend)
        .then(response => {
          this.setState({ friendList: response.data })
        })
        .catch(response => {
          console.log('Could not edit friend ', response.data)
        })
    }

    deleteFriend = id => {
      axios
        .delete(`${this.url}/${id}`)
        .then(response => {
          this.setState({ friendList: response.data })
        })
        .catch(response => {
          console.log('Could not delete friend ', response)
        })
    }


  render() {
    return (
      <div className='app'>
        <div className='app-header'>
        <h1>My Friends</h1>
        <p>Or people I call friends who are really just acquaintances. Actually I've probably never met a lot of these people.</p>
      </div>
        <Friends
        friendList={this.state.friendList}
        editFriend={this.editFriend}
        deleteFriend={this.deleteFriend}
        />
        <AddFriend handleInput={this.handleInput} addNewFriend={this.addNewFriend}/>
      </div>
    );
  }
}

export default App;
