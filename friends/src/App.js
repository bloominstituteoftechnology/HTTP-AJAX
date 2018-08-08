import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url =
  "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true
    }
  }
  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend=><div key={friend.id}>{friend.name}</div>)}
      </div>
    );
  }
}

export default App;
