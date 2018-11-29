import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
        });
      })
      .catch(err => {
        console.log('ERR');
      });
  }

  addFriend = (friend) => {
    axios
      .post(
        'http://localhost:5000/friends'
        , friend)
      .then(res => (
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          email: '',
        })
      ))
      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios
      .delete(
        `http://localhost:5000/friends/${id}`
        )
      .then(res => {
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => console.log(err))
  }

  updateFriend = (id, friend) => {
    axios
      .put(
        `http://localhost:5000/friends/${id}`,
        friend
      )
      .then(res => console.log())
      .catch(err => console.log(err))
  }

  render() { 
    return (
      <div className="app ui container">
        <h1 style={{margin: '24px'}} className="ui center aligned header">Friend App</h1>
        <div className="ui pointing menu">
          <NavLink className="item" exact to='/'>
            Home
          </NavLink>
          <NavLink className="item" to='/form'>
            Add Friend
          </NavLink>
        </div>

        <Route path='/form' render={ props => (
          <FriendForm
            {...props}
            addFriend={this.addFriend}
          />
        )} />

        <FriendList
          deleteFriend={this.deleteFriend}
          friends={this.state.friends}
        />

        <Route exact path='/' />

      </div>
    );
  }
}

export default App;