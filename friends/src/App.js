import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';
import Header from './components/Header';
import AddButton from './components/AddButton';
import BurnItDown from './components/BurnItDown';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.url = 'http://localhost:5000/friends'
    this.state = {
      friendList: [],
      activeFriend: null,
      burned: false,
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

  getFriendById = id => {
    axios
      .get(`http://localhost:5000/friendById/${id}`)
      .then(response => (this.setState({ activeFriend: response.data })))
  }


  addNewFriend = (name, age, email, avatar)=> {
    let newFriend = {
      name: name,
      avatar: avatar,
      age: age,
      email: email,
    };
    axios
      .post(this.url, newFriend)
      .then(response => {
        this.setState({ friendList: response.data })
      })
      .then(this.setState({burned: false}))
      .catch(response => {
        console.log('Could not add friend ', response);
      });
      // this.setState({ burned: false });
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

    deleteAll = () => {
      this.state.friendList.forEach(friend => this.deleteFriend(friend.id));
      this.setState({ burned: true })
    }

  render() {
    return (
      <div className='app'>
        <Route exact
          path='/'
          component={Header} />
        <Route exact
          path='/'
          component={AddButton} />
        <Route exact
          path='/'
          render={(props) => (<Friends
          {...props}
          getFriendById={this.getFriendById}
          friendList={this.state.friendList}
          editFriend={this.editFriend}
          deleteFriend={this.deleteFriend} />)} />
        {!this.state.burned && <Route exact
          path='/'
          render={(props) => (<BurnItDown {...props}
          deleteAll={this.deleteAll} />)} />}

        <Route
          path='/add'
          render={(props) => (<AddFriend
            {...props}
            handleInput={this.handleInput}
            addNewFriend={this.addNewFriend} />)} />
        <Route
          path='/friends/:id'
          render={(props) => (<Friend {...props} item={this.state.activeFriend} />)} />
      </div>
    );
  }
}

export default App;
