import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends:response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return(
            <div key={friend.id}>
              <p><strong>Name:</strong> {friend.name}</p>
              <p><strong>Age:</strong> {friend.age}</p>
              <p><strong>Email:</strong> {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
