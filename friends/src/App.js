import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friendsData: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
