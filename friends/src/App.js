import React, { Component } from "react";
import { Router } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map(friend => (
          <div className="friend" key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
