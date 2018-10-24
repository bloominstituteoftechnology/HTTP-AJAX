import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Friends from './component/Friends.js';

class App extends Component {
  
  state = {
    data: [],
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({data: response.data });
      })
      .catch(err => {
        console.log('SNAFU', err);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(friend => (
          <Friends key={friend.id} friend = {friend} />
        ))}
        <form>
          <h1>Enter your new Friend's info below:</h1>
          <input type='text' placeholder='name'></input>
          <input type='email' placeholder='email'></input>
          <input type='number' placeholder='age'></input>
          <button onClick={this.test}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
