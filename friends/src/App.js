import React from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";

import "./App.css";

class App extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>These my friens, B!</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
