import React, { Component } from 'react';
import axios from "axios";
import Friends from './components/friends/Friends';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true
    }
  }

  componentDidMount(){
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState(() => ({friends: response.data, loading: false
      }))
    })
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="app">
        {this.state.friends.map(friend => <Friends key={friend.id} friend={friend}/>)} 
      </div>
    );
  }
}

