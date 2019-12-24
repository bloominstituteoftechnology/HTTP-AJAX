import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';
import Header from './components/Header';
import AddButton from './components/AddButton';
import BurnItDown from './components/BurnItDown';
import Undo from './components/Undo';
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
      restoreList: [],
      diffList: [],
    }
  }

  componentDidMount = () => {
    const friendRequest = axios.get(this.url);
    friendRequest.then(response => {
      this.setState({
        friendList: response.data,
        restoreList: response.data,
      });
    }).catch(response => {
      console.log('Had issues with friends ', response)
    })
  }

  // getFriendById = id => {
  //   axios
  //     .get(`http://localhost:5000/friendById/${id}`)
  //     .then(response => (this.setState({ activeFriend: response.data })))
  // }


  addNewFriend = (name, age, email, avatar)=> {
    let newFriend = {
      name: name,
      avatar: avatar,
      age: age,
      email: email,
    };
    axios
      .post(this.url, newFriend)
      .then(this.setState(() => ({
        restoreList: this.state.friendList
      })))
      .then(response => {
        this.setState(() => ({ friendList: response.data }))
      })
      .then(this.setState(() => ({ burned: false })))
      .catch(response => {
        console.log('Could not add friend ', response)
      })
  }

    editFriend = friend => {
      axios
        .put(`${this.url}/${friend.id}`, friend)
        .then(this.setState(() => ({
          restoreList: this.state.friendList
        })))
        .then(response => {
          this.setState(() => ({ friendList: response.data })
        )})
        .catch(response => {
          console.log('Could not edit friend ', response.data)
        })
    }

    deleteFriend = id => {
      axios
        .delete(`${this.url}/${id}`)
        .then(this.setState(() => ({
          restoreList: this.state.friendList
        })))
        .then(response => {
          this.setState(() => ({ friendList: response.data,
           })
        )})
        .catch(response => {
          console.log('Could not delete friend ', response)
        })
    }

    deleteAll = () => {
      this.setState({
        restoreList: this.state.friendList,
      });
      this.state.friendList.map(friend => this.deleteFriend(friend.id));
      this.setState({ burned: true })
    }

    restoreList = () => {
      this.state.restoreList.map(friend =>
        this.addNewFriend(friend.name, friend.age, friend.email, friend.avatar)
      );
    //   let fromServer = [];
    //   let fromApp = this.state.restoreList;
    //   const friendRequest = axios.get(this.url);
    //   friendRequest.then(response => {
    //     this.setState({
    //       diffList: response.data,
    //     });
    //   })
    //   .then(
    //     fromServer = this.state.diffList;
    //   )
    //   .then(
    //
    //   )
    //   .catch(response => {
    //     console.log('Had issues with friends ', response)
    //   })
    // }
    }
  render() {
    if ((this.state.friendList.length === 0) && !this.state.burned){
      return(
        <div className='loading'>
        <h1>Loading friends...</h1>
      </div>
      )}
    return (
      <div className='app'>
        <Route exact
          path='/'
          component={Header} />
          <div className='buttons'>
        <Route exact
          path='/'
          component={AddButton} />
          {this.state.burned && <Route exact
            path='/'
            render={(props) => (<Undo {...props}
            restoreList={this.restoreList} />)} />}
        </div>
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
