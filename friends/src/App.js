import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import Friend from './components/Friend';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friendsList: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friendsList: res.data}))
      .catch(err => console.log(err))
  }

  addNewFriend = (friend) => {
    axios.post('http://localhost:5000/friends/', friend)
      .then(res =>{
        console.log(res)
        this.setState({
          friendsList: res.data
        })
      })
      .catch(err=> console.log(err))
  }
  
  editFriend = id => {

  }
  
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res =>{
      this.setState({
        friendsList: res.data
      })
    })
    .catch(err => console.log(err))
  }
  
  render() {
    const { friendsList } = this.state
    return (
      <div className="App">
        <div className='home-nav-wrapper'>
                <nav className='home-nav'> 
                    <NavLink exact to='/' className='home-nav-links'>Home</NavLink>
                    <NavLink to='/friends' className='home-nav-links'>Friends</NavLink>
                    <NavLink to='/add-friend' className='home-nav-links'>Add New Friend</NavLink>
                </nav>
            </div>
        <Route exact path='/' component={Home}/>
        <Route 
          exact path='/friends'
          render={props => <FriendsList {...props} friends={friendsList} deleteFriend={this.deleteFriend}/>}
        />

        <Route 
          exact path='/friend/:id'
          render={props => 
            <Friend 
              {...props}
              friend={ friendsList }
              delete={this.deleteFriend}
            />
          }
        />
        <Route 
          exact path='/add-friend'
          render={props => <NewFriendForm {...props} addNewFriend={this.addNewFriend}/>}
        />
       
      </div>
    );
  }
}

export default App;
