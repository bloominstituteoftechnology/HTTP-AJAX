import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: [],
    }
  }

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friendsList: response.friends,
      });
    })
  }

  render() {
    return (
      <div>
        <h4>Stuff</h4>
      </div>
    );
  }
}

export default App;
