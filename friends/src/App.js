import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      email: "",
      age: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  render() {
    return (
      
    )
  }
}

export default App;
