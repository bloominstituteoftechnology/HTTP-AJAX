import React, { Component } from 'react';
import axios from "axios";
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
      
      </div>
    );
  }
}

