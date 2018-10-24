import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    }
  }

  componentDidMount() {
      axios
          .get(`http://localhost:5000/friends/`)
          .then(response => {
              this.setState({friends: response.data});
          })
          .catch(error => {
              console.error('Server Error', error);
          });
  }

  render() {
    const { friends } = this.state;

    return (
      <div className="App flex-column">
          {!!friends.length && friends.map(friend => (
              <span>{friend.name}</span>
          ))}
      </div>
    );
  }
}

export default App;
