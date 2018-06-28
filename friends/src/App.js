import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList/FriendsList";
import FriendsForm from "./components/FriendsList/FriendsForm";
import styled from "styled-components";
import "bulma/css/bulma.css";

const HeroSection = styled.section.attrs({
  className: "hero is-info is-bold has-text-centered"
})``;

const HeroBody = styled.div.attrs({
  className: "hero-body"
})``;

const Title = styled.div.attrs({
  className: "title"
})``;

class App extends Component {
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
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeFriendInfo = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    const friend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("Post", response.data);
        this.setState({ friendsData: response.data, friend: "" });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <HeroSection>
          <HeroBody>
            <Title>Friend List</Title>
          </HeroBody>
        </HeroSection>

        <FriendsForm
          changeInfoHandler={this.changeFriendInfo}
          addFriendHandler={this.addFriend}
        />

        <FriendsList friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
