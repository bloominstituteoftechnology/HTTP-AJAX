import React, { Component } from 'react';
import './App.css';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        friends: []
     };
    }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState({ friends: response.data });
    })
    .catch(error => {
        console.log('OOPS', error);
    })
  }

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:3333/items/${updatedFriend.id}`, updatedFriend)
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
        // redirect
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <FriendForm />
        <h1>The Team</h1>
        {this.state.friends.map(friend =>(
          <FriendsList friend={friend} key={friend.id} />
        ))}
        <Route path='/' render={props => <FriendForm {...props} updateFriend={this.updateFriend} />} />
      </div>
    );
  }
}

export default App;
