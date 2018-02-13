import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    loading: true,
    noData: true,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <div className="friend-title">Lambda Friends</div>
        {this.state.loading && <div>Loading Friends...</div>}

        {!this.state.loading && (
          <ul className="friend-grid">
            {this.state.friends.map(friend => {
              return (
                <li key={friend.id} className="friend">
                  <div className="friend-name">{friend.name}</div>
                  <div className="friend-age">{`Age: ${friend.age}`}</div>
                  <div className="friend-email">{`Email: ${friend.email}`}</div>
                </li>
              );
            })}
          </ul>
        )}
        </p>
      </div>
    );
  }


componentDidMount() {
  this.setState({ loading: true });
  axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data, loading: false });
    })
    .catch(error => {
      this.setState({ loading: false });
      console.log('there was error', error);
    });
  }
}

export default App;
