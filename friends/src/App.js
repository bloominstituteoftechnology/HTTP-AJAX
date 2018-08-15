import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
Route,
Link,
NavLink
} from "react-router-dom";
import axios from "axios";





class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      friends: []
    };
  }

  componentDidMount = () => {
  axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() => ({friends: response.data}))
    })
    .catch(err => {'Error:', err})
}
  

  render() {
    return (
      <div>
        {this.state.friends.map(friends => {
          return (<div key={friends.id}>
          {friends.id}
          {friends.name}
          {friends.age}
          {friends.email}
          </div>)
        })}
      </div>
    )
  }
};
export default App;
