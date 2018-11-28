import React, { Component } from "react";
import Friends from "./Friends";
import "./App.css";
import axios from "axios";

//get the data from the server

// display the data in a component
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(`${err} YOLO`));
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <Friends friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
