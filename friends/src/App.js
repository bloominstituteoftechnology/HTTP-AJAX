import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
 
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
