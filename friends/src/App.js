import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}));
  }


  render() {
    return (
      <div className="App">
        <h1>Friend App</h1>
        <ul>
          {this.state.friends.map( (friend) => {
            return (
              <li key={friend.id}>
                Name: {friend.name} Age: {friend.age} Email: {friend.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
