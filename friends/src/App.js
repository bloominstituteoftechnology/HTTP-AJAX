import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[]
    }
  }
    componentDidMount(){
      axios
      .get('http://localhost:5000/friends')
      .then(res => {this.setState({ friends: res.data });})
      .catch(err => console.log(err));
    }

    addFriend = (data) => {
      axios
        .post('http://localhost:5000/friends', data)
        .then(res => {
          this.setState({
            friends: res.data
          })
        })
        .catch(err => console.log(err))
    }

    deleteFriend = id => {
      axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err))
    };

  render() {
    return (
      <div>
      <Link to='/form'> Inputs </Link>{' '}
        <Route
          path='/form'
          render={() =>(
          <FriendsForm addFriend={this.addFriend}/>
        )}
        />
          <FriendsList
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
      </div>
    );
  }
}

export default App;
