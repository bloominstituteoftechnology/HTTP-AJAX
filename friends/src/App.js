import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

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
        console.log("IN CATCH", err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.state.friends.map(friend => {
          return (
            <div>
              <h3>{friend.name}</h3> {""}
              <span>{friend.age} {""}</span>
              <br/>
              <span>{friend.email}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
