import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Home from './components/home';
import FriendsList from './components/friendsList';
import Input from './components/input';
import Friend from './components/friend';

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

  handleInputChange = e => {
      this.setState({[e.target.name]: e.target.value});
  };

  saveFriend = () => {
    const newFriend = {name:this.state.name, age: this.state.age, email: this.state.email}
    axios.post(`http://localhost:5000/friends/`, newFriend)
      .then(friend => {
        this.setState({friends: friend.data, 
          friend: {
            name: '',
            age: '',
            email: ''
          } 
        })
      })
      .catch(err => {
        console.log('friend did not add', err);
      })
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

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
            <NavLink to="/friends" activeClassName="activeNavButton">
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink to="/input" activeClassName="activeNavButton">
              Add New
            </NavLink></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList {...props} friendsList={this.state.friends} />
          )}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <Friend  
              {...props} 
              friends={this.state.friends} />
          )}
        />
        <Route
          exact
          path="/input"
          render={props => (
            <Input 
              friend={this.state.friends} 
              saveFriend={this.saveFriend} 
              handleFormInput={this.handleInputChange}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
