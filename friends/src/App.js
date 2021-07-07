import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css'
import Friends from './Friends';
import Form from './Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }


  render() {
    return (
      <div className="App">
        <Form/>
        <Friends friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
