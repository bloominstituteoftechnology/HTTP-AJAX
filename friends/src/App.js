import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";

class App extends Component {
  state = {
    friends: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response.data);
      this.setState({
        friends: response.data,
        loading: false
      })
    });
  }

  render() {
    return ( 
    <div className="App">
      <FriendsList friends={this.state.friends} loading={this.state.loading} />
    </div>
    )
  }
}

export default App;
