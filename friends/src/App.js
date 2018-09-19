import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Friends from './components/Friends.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    //fetch data from api
     axios
       .get('http://localhost:5000/friends')
       .then(response => {
         console.log(response);
         this.setState({friends: response.data.message});
       })
       .catch(err => console.log("Error", err));
   }
  // addToFriendsSavedList = friend => {
  //   const friends = this.state.friends;
  //   friends.push(friends);
  //   this.setState({ friends });
  // };

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
        <div>
          {this.state.friends.map(friend => (
            <div key={friend.id}>
              <p>
                 Friend: {friend.name}
              </p>
            </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
