import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: '',
      },
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.friend);
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({
          friends: response.data,
          friend: { name: '', age: '', email: '' },
        });
        console.log('======= HELLO FROM SUBMIT =======');
      })
      .catch(err => {
        console.log('Error, Error, Error!');
      });
  };

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addFriend">Add New Friend</NavLink>
          </li>
        </ul>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/addFriend"
          render={props => (
            <FriendForm
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              friend={this.state.friend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
