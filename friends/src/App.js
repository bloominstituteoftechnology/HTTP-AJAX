import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import EditForm from './components/EditForm';
import {Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        //console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => console.log('err', err));
  }

  addFriend = newFriend => {
    // add new friend if all fields are filled out
    if (newFriend.name && newFriend.age && newFriend.email) {
      axios
        .post('http://localhost:5000/friends', newFriend)
        .then(res => {
          this.setState({friends: res.data});
        })
        .catch(err => console.log(err));
    }
  };

  updateFriend = friend => {
    //const friend = this.state.friends.filter()
    //console.log('update', id);
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({friends: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route path="/friend/:id"
          render={props => (
            <Friend {...props}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <EditForm {...props} friends={this.state.friends}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
