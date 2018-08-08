import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './list';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],    
    }
  }
  
  componentDidMount(){
    console.log('mounted');
    axios.get(url).then(response => {
      console.log(response)
      this.setState({
        friends: response.data
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>mjk-HTTP-AJAX</h1>
        <div className="component">
          {this.state.friends.map(friend => {
            return <Friend data={friend}>{friend.name}</Friend>
          })}
        </div>
      </div>
    );
  }
}

export default App;

