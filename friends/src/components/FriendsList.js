import React from "react";
import axios from "axios";
import "./FriendsList.css";

import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        //   console.log(response);
        this.setState({friends: response.data});
      })
      .catch(err => console.log(err));
  };

  changeHandler = e => {
    this.setState({
      newFriend: {...this.state.newFriend, [e.target.name]: e.target.value}
    });
  };

  addNewFriend = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({friends: response.data}));
    this.setState({newFriend: {name: "", age: "", email: ""}});
    console.log(this.state.friends);
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState({friends: response.data});
    });
  };

  updateFriend = (id, obj) => {
    //  console.log(this.state.friends);
    console.log(obj); // {name: "Gabe", age: "31", email: "gabe@me.com"}
    axios.put(`http://localhost:5000/friends/${id}`, obj).then(response => {
      console.log(response.data);
      this.setState({friends: response.data});
    });
    console.log(this.state.friends);
  };

  render() {
    return (
      <div className="friends-list">
        <div className="my-friends">
          {this.state.friends.map(friend => (
            <FriendCard
              friend={friend}
              updateFriend={this.updateFriend}
              key={friend.id}
              friendsData={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          ))}
        </div>

        <form action="" className="add-friend">
          <h3>Add A New Friend</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
          />
          <br />
          <button onClick={this.addNewFriend}>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
