import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Navigation from "./components/Navigation";
import FriendsList from "./components/FriendList";
import SingleFriend from "./components/SingleFriend";
import FriendForm from "./components/FriendForm";

class App extends Component {
  state = {
    friends: [],
    error: "",
    activeFriend: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log(response)
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error
        });
      });
  }

  addFriend = (event, friend) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteFriend = (event, id) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      });
  };

  setUpdateForm = (event, friend) => {
    event.preventDefault();

    this.setState({
      activeFriend: friend
    });

    this.props.history.push("/friend-form");
  };

  updateFriend = (event, friend) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          activeFriend: null,
          friends: response.data,
        });
        this.props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <SingleFriend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />
        <Route
          exact
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              activeFriend={this.state.activeFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
