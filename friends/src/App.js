import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

import FriendsList from './components/FriendsList/FriendsList';
import Home from './components/Home';
import Friend from './components/Friend';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(friend => this.setState({ friends: friend.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (!this.state.friends) {
      return <h2>Loading Friends</h2>;
    }
    return (
      <div className='App'>
        <div className='navbar-wrapper'>
          <ul className='navbar'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/friends'>Friends</NavLink>
            </li>
            <li>
              <NavLink to='/newfriend'>Add Friend</NavLink>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/friends'
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path='/friends/:id'
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
