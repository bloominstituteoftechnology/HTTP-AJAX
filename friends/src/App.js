
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Friends from './components/Friends.jsx'

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      loading: true
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }






  render() {
    return (
       <div className="App">
        <Friends friends={this.state.friends} />
       
      </div>
    );
  }
}





export default App;
