import React, { Component } from "react";
import { Route } from "react-router-dom";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";
import axios from "axios";

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("http://localhost:5000/friends")
      .then(({ data }) => this.setState({ friendsData: data }))
      .catch(error => console.log(error));
  }

  handleAddFriendChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitFriend = () => {
    const friend = {};
    friend.name = this.state.name;
    friend.age = this.state.age;
    friend.email = this.state.email;
    this.setState({ name: "", age: "", email: "" });
    axios
      .post("http://localhost:5000/friends", friend)
      .then(x => this.getData())
      .catch(error => console.log(error));
  };

  handleEditFriend = () => {};

  render() {
    if (this.state.friendsData === []) {
      return null;
    }
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <AddFriend
              fieldType="Add"
              onChange={this.handleAddFriendChange}
              onClick={this.handleSubmitFriend}
            />
          )}
        />
        {this.state.friendsData.map((data, i) => (
          <Route
            key={`friend-route${i}`}
            path={`/${data.name.replace(/ /g, "")}`}
            render={() => <FriendCard {...data} />}
          />
        ))}
        <Route
          exact
          path="/"
          render={() =>
            this.state.friendsData.map((data, i) => (
              <FriendCard key={`friend${i}`} {...data} />
            ))
          }
        />
      </div>
    );
  }
}

export default FriendsList;
