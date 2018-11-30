import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './Components/Friends';
import Friend from './Components/Friend';
import DisplayFriend from './Components/DisplayFriend';
import FriendForm from './Components/FriendForm';
import EditFriend from './Components/EditFriend';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const urlLinks = {
  home: '/',
  friend: `/friend`,
  editFriend: `/friend/edit`
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  addFriend = newFriend => {
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  editFriend = (id, editedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, editedFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <Route
          exact
          path={urlLinks.home}
          render={props => (
            <FriendForm
              {...props}
              friends={this.state.friends}
              urlLinks={urlLinks}
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          exact
          path={urlLinks.home}
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              urlLinks={urlLinks}
            />
          )}
        />

        <Route
          exact
          path={urlLinks.friend}
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              urlLinks={urlLinks}
            />
          )}
        />

        <Route
          exact
          path={`${urlLinks.friend}/:id`}
          render={props => (
            <DisplayFriend
              {...props}
              friends={this.state.friends}
              urlLinks={urlLinks}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          exact
          path={`${urlLinks.editFriend}/:id`}
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              urlLinks={urlLinks}
              addFriend={this.addFriend}
              editFriend={this.editFriend}
              edit
            />
          )}
        />
      </div>
    );
  }
}

export default App;
