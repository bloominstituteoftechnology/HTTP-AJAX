import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  names = () => {
    return (
      <div className="friends">
        {this.state.friends.map(friend => (
          <div key={friend.id} className="friend">
            <div className="friend--name">{friend.name}</div>
            <div className="friend--age">{friend.age}</div>
            <div className="friend--email">{friend.email}</div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const friendsCopy = [...this.state.friends];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.names()}
        {console.log(this.state.friends)}
      </div>
    );
  }
}

export default App;
