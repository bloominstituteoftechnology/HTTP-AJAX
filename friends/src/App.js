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
    });
  }


  addNewFriend = (name, age, email)=> {
    let newFriend = {
      id: this.state.friendList.length + 1,
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
          this.setState({ friendList: response.data})
        })
    }


  render() {
    return (
      <div className='app'>
        <Friends
        friendList={this.state.friendList}
        editFriend={this.editFriend}
        />
        <AddFriend handleInput={this.handleInput} addNewFriend={this.addNewFriend}/>
      </div>
    );
  }
}

export default App;
