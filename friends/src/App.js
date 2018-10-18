import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home';
import FriendsList from './Components/FriendsList';
import FriendForm from './Components/FriendForm';

import './App.css';

const blankFormValues = {
  name: '',
  age: '',
  email: ''
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      editingFriend: null,
      isEditing: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      friend: { ...this.state.friend, [event.target.name]: event.target.value }
    });
  };

  addNewFriend = event => {
    console.log(event);
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response =>
        this.setState({ friends: response.data, friend: blankFormValues })
      );
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  };

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingFriend}`,
        this.state.friend
      )
      .then(response => {
        this.setState({
          friends: response.data,
          editingFriend: null,
          isEditing: false,
          friend: blankFormValues
        });
      })
      .catch(error => console.log(error));
  };

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({
      friend: friend,
      isEditing: true,
      editingFriend: friend.id
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div>
            <NavLink exact to="/" activeClassName="active-nav-button">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/my-friends" activeClassName="active-nav-button">
              My Friends
            </NavLink>
          </div>
          <div>
            <NavLink to="/friend-form" activeClassName="active-nav-button">
              Be Matt's Friend!
            </NavLink>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/my-friends"
          render={props => (
            <FriendsList
              {...props}
              friendsProps={this.state.friends}
              deleteFriend={this.deleteFriend}
              updateFriend={this.setUpdateForm}
            />
          )}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              friend={this.state.friend}
              addNewFriend={this.addNewFriend}
              handleChange={this.handleChange}
              updateFriend={this.updateFriend}
              isEditing={this.state.isEditing}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
