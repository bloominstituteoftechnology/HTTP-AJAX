import React, { Component } from 'react';
//import './App.css';
import NewFriend from './NewFriend';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
      title: "List of Friends"
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then( response => this.setState({friends:response.data}));
      
  }
  render() {
    return (
      <div className="App">
      <h1>{this.state.title}</h1>
      <ul>
        {this.state.friends.map(function(friend, index){
          return <li key={index}>{friend.name}</li>;
        })}
      </ul>
      <NewFriend />
      </div>
    );
  }
}

export default App;
