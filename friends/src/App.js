import React from "react";
import "./App.css";
import FriendList from "./Component/friendsList";
import Form from "./Component/form";
import Friend from "./Component/friend";
import { Route } from "react-router-dom";
import axios from "axios";
class App extends React.Component {
  state = {
    friends: [],
    errorMessage: "",
    newName: "",
    newAge: "",
    newEmail: ""
  };
  getFriends = async () => {
    try {
      const axoisData = await axios.get("http://localhost:5000/friends");
      this.setState({ friends: axoisData.data });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  postFriend = async e => {
    try {
      e.preventDefault();
      console.log(this.state.newEmail, this.state.newAge);
      await axios.post("http://localhost:5000/friends", {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      });
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  updateFriend = async id => {
    try {
      await axios.put(
        `http://localhost:5000/friends/${id}`,
        this.state.newFriend
      );
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  deleteFriend = async id => {
    try {
      await axios.delete(`http://localhost:5000/friends/${id}`);
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  onChangeHandler = (e, text) => {
    text === "name" && this.setState({ newName: e });
    text === "age" && this.setState({ newAge: e });
    text === "email" && this.setState({ newEmail: e });
  };

  componentDidMount() {
    this.getFriends();
  
  }

  render() {
    return (
      <div className="App">
      <Route
          exact
          path="/friends/:id"
          render={props => (
            <Friend
              update={this.updateFriend}
              delete={this.deleteFriend}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <FriendList
              data={this.state.friends}
              delete={this.deleteFriend}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/friends/:id/update"
          render={props => (
            <Form
              inputValue={this.onChangeHandler}
              submit={this.updateFriend}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/friends/add"
          render={props => (
            <Form
              inputValue={this.onChangeHandler}
              submit={this.postFriend}
              {...props}
            />
          )}
        /> 
      </div>
    );
  }
}

export default App;
