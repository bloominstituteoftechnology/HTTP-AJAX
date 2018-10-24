import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log(response);
      this.setState({data: response.data});
  })
      .catch(err=>{
        console.log("ERROR", err);
    });
  }

  render() {
    return <FriendsList data={this.state.data} />;
  }
}

export default App;
