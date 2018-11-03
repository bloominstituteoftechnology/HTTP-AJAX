import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  componentDidMount() {
    //lifecycle methods come after constructor
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends/", this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
      });
  };

  deleteHandler = friendId => {
    axios.delete(`http://localhost:5000/friends/${friendId}`).then(res => {
      this.setState({ friends: res.data });
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.friends.map(friends => (
            <FriendsList
              key={friends.id}
              friends={friends}
              deleteHandler={this.deleteHandler}
            />
          ))}
        </div>
        <FriendForm
          friend={this.state.friend}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
}

export default App;
