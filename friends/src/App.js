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

  handleAddFriend = (name, age, email) => {
    let friend = {
      id: this.state.friends.length + 2,
      name: name,
      age: age,
      email: email
    }
    axios.post("http://localhost:5000/friends", friend)
      .then((response) => {
        console.log(response);
        this.setState({friends: response})
      })
      .catch((response) => {
        console.log(`error ${response}`)
      })
  }

  render() {
    return ( 
    <div className="App">
      <FriendsList friends={this.state.friends} loading={this.state.loading} addFriend={this.handleAddFriend}/>
    </div>
    )
  }
}

export default App;
