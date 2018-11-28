import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import AddFriendsForm from "./AddFriendsForm";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.2rem;
  text-align: center;
`;

const FriendCard = styled.div`
  border: 1px dashed white;
  margin-bottom: 2rem;
  padding: 1rem;
  background: black;
`;
export default class FriendsList extends Component {
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
      .get("http://localhost:5000/friends/")
      .then(res => {
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.age !== "" &&
      this.state.email !== ""
    ) {
      axios
        .post("http://localhost:5000/friends/", {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(err) {
          console.log(err);
        });
      this.setState(prevState => ({
        friendsData: [
          ...prevState.friendsData,
          {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          }
        ],
        name: "",
        age: "",
        email: ""
      }));
    } else return;
  };

  render() {
    return (
      <Container>
        <AddFriendsForm
          friendsData={this.state.friendsData}
          addFriend={this.addFriend}
          handleChange={this.handleChange}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
        {this.state.friendsData.map(friend => (
          <FriendCard key={friend.id}>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </FriendCard>
        ))}
      </Container>
    );
  }
}
