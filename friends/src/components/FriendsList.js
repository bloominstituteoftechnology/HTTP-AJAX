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
      friendsData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/")
      .then(res => {
        console.log(res.data);
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <AddFriendsForm />
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
