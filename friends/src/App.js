import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],

      name: "",
      email: "",
      age: ""
    };
  }

  pullFriendsData = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  componentDidMount() {
    this.pullFriendsData();
  }

  addFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };
    axios
      .post(`http://localhost:5000/friends`, newFriend)

      .then(() =>
        this.setState({
          name: "",
          email: "",
          age: ""
        })
      )
      .then(() => this.pullFriendsData());
  };

  changeHandler = e => {
    let targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
  };

  unFriend = e =>{
    let friendId = e.target.id;
    axios.delete(`http://localhost:5000/friends/${friendId}`).then(()=> this.pullFriendsData())
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Friends</h1>
        <FriendsList friends={this.state.friends} unFriend={this.unFriend}/>
        <FriendForm
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
          newFriend={{
            name: this.state.name,
            email: this.state.email,
            age: this.state.age
          }}
        />
      </div>
    );
  }
}

export default App;
