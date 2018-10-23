import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsList.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
      .then(response =>{
        this.setState({
          friends: response.data
        })
      })
  }

  render(){
    return (
      <div className="App">
        {console.log(this.state.friends)}
      </div>
    )
  }

}

export default App;
