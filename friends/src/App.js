import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

import "./App.css";

const blankFormValues = {
  name: '',
  age: '',
  email: '',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      },
      isUpdating: false
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
        this.setState({ friends: res.data, friend: blankFormValues, });
      });
  };

  deleteHandler = friendId => {
    axios.delete(`http://localhost:5000/friends/${friendId}`).then(res => {
      this.setState({ friends: res.data });
    });
  };

  goToUpdate = (e, id) => {
    e.preventDefault();
    const updatedFriend = this.state.friends.find(friend => friend.id == id);
    this.setState({ isUpdating: true, friend: updatedFriend });
  };

  updateHandler = friendId => {
    axios
      .put(`http://localhost:5000/friends/${friendId}`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data, isUpdating: false, friend: blankFormValues, });
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
              goToUpdate={this.goToUpdate}
            />
          ))}
        </div>
        <FriendForm
          friend={this.state.friend}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          isUpdating={this.state.isUpdating}
          updateHandler={this.updateHandler}
        />
      </div>
    );
  }
}

export default App;
