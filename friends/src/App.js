import React, { Component } from 'react';
import Friends from './Components/Friends';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }) );
      })
      .catch(error => {
        console.error('Server Error',error );
      });
  }
  render() {
    return (
      <div>
       <Friends friends={this.friends}/>
      </div>
    );
  }
}

export default App;



