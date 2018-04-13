import React, { Component } from "react";
import axios from "axios";
import { Container, Card, CardHeader, CardBody, CardText } from "reactstrap";

import FriendCard from "./FriendCard";

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null,
      newFriendId: null,
      newFriendName: "",
      newFriendAge: "",
      newFriendEmail: ""
    };
  }

  componentDidMount = () => {
    this.getFriends();
  };

  getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleNewFriendInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewFriend = id => {
    const newFriend = {
      id: id,
      name: this.state.newFriendName,
      age: this.state.newFriendAge,
      email: this.state.newFriendEmail
    };
    if (
      newFriend.id !== "" &&
      newFriend.name !== "" &&
      newFriend.age !== "" &&
      newFriend.email !== ""
    ) {
      axios
        .post("http://localhost:5000/friends", newFriend)
        .then(response => {
          this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({
        newFriendName: "",
        newFriendAge: "",
        newFriendEmail: ""
      });
    } else {
      alert("Fill out all inputs to submit");
    }
  };

  render() {
    if (this.state.friends === null) {
      return <div>Loading friends...</div>;
    }
    if (this.state.friends === undefined || this.state.friends.length === 0) {
      const id = 1;
      return (
        <div className="App mt-5">
          <Container>
            No friends left :(
            <br />
            <Card>
              <CardHeader>
                {`Name:  `}
                <input
                  type="text"
                  name="newFriendName"
                  value={this.state.newFriendName}
                  placeholder="Add name..."
                  onChange={this.handleNewFriendInput}
                />
              </CardHeader>
              <CardBody className="text-left">
                <CardText>
                  {`Age:  `}
                  <input
                    type="number"
                    name="newFriendAge"
                    value={this.state.newFriendAge}
                    placeholder="Add age..."
                    onChange={this.handleNewFriendInput}
                  />
                </CardText>
                <CardText>
                  {`Email:  `}
                  <input
                    type="text"
                    name="newFriendEmail"
                    value={this.state.newFriendEmail}
                    placeholder="Add email..."
                    onChange={this.handleNewFriendInput}
                  />
                </CardText>
                <CardText>
                  {`Id:  `} {id}
                </CardText>
              </CardBody>
              <button onClick={() => this.handleAddNewFriend(id)}>
                Submit
              </button>
            </Card>
          </Container>
        </div>
      );
    }
    if (this.state.friends !== undefined && this.state.friends !== null) {
      return (
        <div className="App mt-5">
          <h1>Friendslist</h1>
          <Container className="mb-5">
            {this.state.friends.map(friend => {
              return (
                <div key={friend.id}>
                  <FriendCard
                    key={friend.id}
                    friend={friend}
                    getFriends={this.getFriends}
                  />
                </div>
              );
            })}
            <Card>
              <CardHeader>
                {`Name:  `}
                <input
                  type="text"
                  name="newFriendName"
                  value={this.state.newFriendName}
                  placeholder="Add name..."
                  onChange={this.handleNewFriendInput}
                />
              </CardHeader>
              <CardBody className="text-left">
                <CardText>
                  {`Age:  `}
                  <input
                    type="number"
                    name="newFriendAge"
                    value={this.state.newFriendAge}
                    placeholder="Add age..."
                    onChange={this.handleNewFriendInput}
                  />
                </CardText>
                <CardText>
                  {`Email:  `}
                  <input
                    type="text"
                    name="newFriendEmail"
                    value={this.state.newFriendEmail}
                    placeholder="Add email..."
                    onChange={this.handleNewFriendInput}
                  />
                </CardText>
                <CardText>
                  {`Id:  `}
                  {this.state.friends[this.state.friends.length - 1].id + 1}
                </CardText>
              </CardBody>
              <button
                onClick={() => {
                  this.handleAddNewFriend(
                    this.state.friends[this.state.friends.length - 1].id + 1
                  );
                }}
              >
                Submit
              </button>
            </Card>
          </Container>
        </div>
      );
    }
  }
}
