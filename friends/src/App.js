import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Form from './components/Form';
import FriendsList from './components/FriendsList';
import './App.css';

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
      editMode: false,
      activeFriend: {}
    };
  }

  componentDidMount() {
    // GET REQUEST
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  // Handles Input State Change
  handleInputChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  // Prepares form for PUT REQUEST
  handleUpdateClick = e => {
    e.preventDefault();
    const id = e.target.parentNode.id;
    const friend = this.state.friends.find(friend => `${friend.id}` === id);
    this.props.history.push('/add-friend');
    this.setState({
      friend: {
        ...this.state.friend,
        name: friend.name,
        email: friend.email,
        age: friend.age
      },
      editMode: true,
      activeFriend: friend
    });
  };

  // Clear out of edit mode
  clearEditMode = () => {
    return this.state.editMode
      ? this.setState({
          editMode: false,
          friend: {
            ...this.state.friend,
            name: '',
            age: '',
            email: ''
          }
        })
      : null;
  };

  // POST REQUEST
  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(
        res =>
          this.setState({
            friends: res.data,
            friend: { ...this.state.friend, name: '', email: '', age: '' }
          }),
        this.props.history.push('/')
      )
      .catch(err => console.log(err));
  };

  // PUT REQUEST
  handleUpdateSubmit = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.friend)
      .then(res =>
        this.setState({
          friends: res.data,
          friend: {
            ...this.state.friend,
            name: '',
            age: '',
            email: ''
          },
          editMode: false,
          activeFriend: {}
        })
      )
      .catch(err => console.log(err));
  };

  // DELETE REQUEST
  handleDeleteClick = e => {
    const id = e.target.parentNode.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { friend, activeFriend, editMode } = this.state;
    return (
      <div className="App">
        <h1>We could be friends</h1>
        <nav className="nav">
          <NavLink exact to="/" onClick={this.clearEditMode}>
            Friends
          </NavLink>
          /
          <NavLink to="/add-friend">
            {this.state.editMode ? 'Update Friend' : 'Add a Friend'}
          </NavLink>
        </nav>
        <Route
          path="/add-friend"
          render={props => (
            <Form
              {...props}
              friend={friend}
              editMode={editMode}
              activeFriend={activeFriend}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              handleUpdateSubmit={this.handleUpdateSubmit}
            />
          )}
        />
        {!this.state.friends.length ? (
          <div>Loading Friends... if you have any...</div>
        ) : (
          <Route
            exact
            path="/"
            render={props => (
              <FriendsList
                {...props}
                editMode={editMode}
                friends={this.state.friends}
                handleDeleteClick={this.handleDeleteClick}
                handleUpdateClick={this.handleUpdateClick}
              />
            )}
          />
        )}
      </div>
    );
  }
}

export default App;
