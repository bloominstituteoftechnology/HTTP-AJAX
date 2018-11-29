import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./Components/FriendsList";
import FriendCard from "./Components/FriendCard";
import Form from "./Components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      age: null,
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addNewFriend = ev => {
    ev.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <FriendsList data={this.state.data} />

        <Form
          name={this.state.name}
          email={this.state.email}
          age={this.state.age}
          handleChange={this.handleChange}
          addNewFriend={this.addNewFriend}
        />

        {this.state.data.length && (
          <Route
            path="/friend-:id"
            render={props => <FriendCard {...props} data={this.state.data} />}
          />
        )}
      </div>
    );
  }
}

export default App;
