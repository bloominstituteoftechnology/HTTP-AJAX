import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './FriendsList/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendlist: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friendList: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }{
    name: should be a string,
    age: should be a number,
    email: should be a string,
  }

  render() {
    return (
      <div className="friend-list">
        {this.state.friendList.map(friend => (
          <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
        ))}
      </div>
    );
  }
}

export default App;

/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/
      
      
      function MovieDetails({ movie }) {
        const { title, director, metascore, stars } = movie;
        return (
          <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
              Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>
      
            {stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </div>
        );
      }
      