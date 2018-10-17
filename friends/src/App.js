import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newFriend: {
        age: '',
        name: '',
        email: ''
      }
    }
  }

componentDidMount() {
  axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({items: response.data}))
    .catch(error => console.log(error));
}

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
