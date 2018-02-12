import React, { Component } from 'react';
import './App.css';
import Friend from './Friend';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  }
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.friends.map(friend => {
            return <Friend 
              friend={friend}
            />
          })}
        </div>
        <form>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Age' />
          <input type='text' placeholder='Email' />
          <button />
        </form>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}

export default App;
