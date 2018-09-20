import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import FriendsList from './components/FriendsList.js';
import Friends from './components/Friends.js';
import NewFriendsForm from './components/NewFriendsForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        email: "",
        age: "", 
      }
    };
  }
  componentDidMount() {
    //fetch data from api
     axios
       .get('http://localhost:5000/friends')
       .then(response => {
         console.log(response);
         this.setState({friends: response.data});
       })
       .catch(err => console.log("Error", err));
   }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="friendsComponents">
          <div className="navBar">
            <div className="navButton">
              <NavLink exact to="/" activeClassName="activeNavButton">Home Page</NavLink>
            </div>
            <div className="navButton">
              <NavLink exact to="/friends" activeClassName="activeNavButton">Friends</NavLink>
            </div>
            <div className="navButton">
              <NavLink to="/addfriends" activeClassName="activeNavButton">New Friends</NavLink>
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/friends" render={props => (<FriendsList {...props} friendsList={this.state.friends} /> )} />
          <Route path="/friends/:friendsId" render={props => (<Friends {...props} friendsList={this.state.friends} /> )} />
          <Route path="/addfriends" render={props => (<NewFriendsForm {...props} friend={this.state.friend} /> )} />
        </div>
      </div>
    );
  }
}

export default App;
