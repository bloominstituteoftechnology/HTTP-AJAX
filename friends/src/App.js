import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Friendslist from './components/Friendslist'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],      
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
          {this.state.friends.map(friend => {
            return (
              <div>
                <h2>{friend.name}</h2>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>            
            )
          })}
      </div>
    );
  }
}

export default App;
