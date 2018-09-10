import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import FriendsList from "./components/FriendsList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("get response: ", response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmitFriend = () => {
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("post response:", response);
        this.setState({friendsData: response.data, name: "", age: "", email: ""});
      })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  //   handleNameChange = e => {
  //   this.setState({ avenger: e.target.value });
  // };

  // handleSubmitAvenger = () => {
  //   const avenger = { avenger: this.state.avenger };
  //   axios
  //     .post("http://localhost:5555/api/avengers", avenger)
  //     .then(response => {
  //       console.log("POST RESPONSE", response);
  //       this.setState({ avengersData: response.data, avenger: "" });
  //     })
  //     .catch(error => console.log(error));
  // };

  render() {
    return (
      <div className="App">
        <form>
        Name:
         <input
          type="text"
          placehoder="friend name"
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
        /><br />
        Age:
        <input
          type="text"
          placehoder="friend age"
          onChange={this.handleChange}
          name="age"
          value={this.state.age}
        /><br />
        Email:
        <input
          type="text"
          placehoder="friend email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        </form>
        <button onClick={this.handleSubmitFriend}>Submit friend</button>




        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
