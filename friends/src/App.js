import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      uname: "",
      uage: "",
      uemail: "",
      update: false,
      id: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({ name: "", age: "", email: "" });
    window.location.reload();
  };
  toggleUpdateForm = (id, name, age, email) => {
    this.setState({
      update: true,
      id: id,
      uname: name,
      uage: age,
      uemail: email
    });
  };
  closeUpdateForm = () => {
    this.setState({ update: false });
  };
  updateFriend = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.uname,
        age: this.state.uage,
        email: this.state.uemail
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({ uname: "", uage: "", uemail: "", update: false });
    window.location.reload();
  };
  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    window.location.reload();
  };
  render() {
    return (
      <div className="app">
        <header>
          <h1>Friends List</h1>
        </header>
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          toggleUpdateForm={this.toggleUpdateForm}
        />
        {this.state.update && (
          <Form
            close="cancel"
            classatr="updateForm"
            title="Update Friend!"
            name1="uname"
            name2="uage"
            name3="uemail"
            name={this.state.uname}
            age={this.state.uage}
            email={this.state.uemail}
            handleInputChange={this.handleInputChange}
            closeUpdateForm={this.closeUpdateForm}
            handleSubmit={this.updateFriend}
          />
        )}
        <Form
          classatr="form"
          title="Add Another Friend!"
          name1="name"
          name2="age"
          name3="email"
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
