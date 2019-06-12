import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import FriendsList from "./components/FriendsList/FriendsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log("response: ", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <FriendsList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
