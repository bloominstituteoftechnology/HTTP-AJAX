import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    friends: []
  };
  componentDidMount() {
    console.log("inside CDM");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState.friends = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    console.log("below Fetch");
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
