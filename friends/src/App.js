import React from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/friends")
      .then(res => {
        console.log(res);
        this.setState(() => ({ friends: res.data }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = newFriend => {
    axios
      .post("http://127.0.0.1:5000/friends", newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <FriendForm friends={this.state.friends} addFriend={this.addFriend}/>
      </div>
    );
  }
}

export default App;