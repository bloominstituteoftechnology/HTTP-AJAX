import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

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
      }
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
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddNewFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => this.setState({ friends: response.data }));
  };

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-friends" activeClassName="activeNavButton">
              My Friends
            </NavLink>
          </li>
          <li>
            <NavLink to="/friend-form" activeClassName="activeNavButton">
              Be my Friend!
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/my-friends"
          render={props => (
            <Friends {...props} friendsProps={this.state.friends} />
          )}
        />
        <Route
          path="friend-form"
          render={props => (
            <FriendForm
              {...props}
              friend={this.state.friend}
              handleAddNewFriend={this.handleAddNewFriend}
              handleChange={this.handleChange}
              handleUpdateFriend={this.handleUpdateFriend}
              isUpdating={this.state.isUpdating}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
