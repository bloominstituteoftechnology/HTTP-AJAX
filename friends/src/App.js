import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Friends from "./components/Friends";
import MakeNewFriends from "./components/MakeNewFriends";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addFriend = friend => {
    axios.post("http://localhost:5000/friends", friend).then(res => {
      console.log(res);
      this.setState({
        friends: [...res.data]
      });
    });
  };
  deleteFriend = friend => {
    axios.delete(`http://localhost:5000/friends/${friend.id}`).then(res => {
      console.log(res);
      this.setState({
        friends: [...res.data]
      });
    });
  };

  editFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: [...res.data]
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Friends: </h1>
        {this.state.friends.map(friend => (
          <Friends
            deleteFriend={this.deleteFriend}
            editFriend={this.editFriend}
            key={friend.id}
            friend={friend}
          />
        ))}
        <MakeNewFriends addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
