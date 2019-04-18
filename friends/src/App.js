import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsArray: [],
      activeFriends: null
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friendsArray: res.data});
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFriend = (event, friend) => {
    event.preventDefault();
    axios
      .post('https://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friendsArray: res.data })
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      })
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    console.log("deleteFriend");
    axios
      .delete(`https://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ 
          friendsArray: res.data 
        });
        this.props.history.push('/friend-list');
      })

      .catch(err => {
        console.log(err);
        this.setState({ error: err })
      });
  };

  updateFriend = (event, friend) => {
    event.preventDefault();
    axios
      .put(`https://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ 
          items: res.data,
          activeFriends: null
        });
        this.props.history.push('/friend-list');
      })
      .catch(err => {
        console.log(err)
      });
  };

  setUpdateFriend = ( event, friend) => {
    event.preventDefault();
    this.setState({
      activeFriends: friend
    });
    this.props.history.push('/friend-form');
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
           yo yo
          </p>
          <FriendsList />
          <FriendForm />

          {/* ROUTES LINKS?? */}
        </header>
      </div>
    );
  }
}

export default App;
