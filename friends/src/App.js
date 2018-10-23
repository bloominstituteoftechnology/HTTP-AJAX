import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import FriendsList from './components/FriendsList'
import {Route } from 'react-router-dom'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
    
  }
  
  componentDidMount() {
    Axios.get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(
          "I will catch you my pretty! And your little dog too!",
          err
        );
      });
  }
  
  render() {
    const { classes } = this.props

    return <div className="App">
        <h1>Friends</h1>
      <Route path="/" render={() => <FriendsList friends={this.state.friends} />} />
      </div>;
  }
}

export default App;
