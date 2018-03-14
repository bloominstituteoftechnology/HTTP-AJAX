import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendComponent from "./components/FriendComponent";
import FormComponent from "./components/FormComponent";

import { Row, Col, Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
    //What does this do?
    this.handleChange = this.handleChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.getData = this.getData.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.editFriend = this.editFriend.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newF = this.state.newFriend;
    newF[name] = value;
    this.setState({
      newFriend: newF
    });
  }

  addFriend(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => {
        console.log(response);
        this.setState({
          newFriend: { name: "", age: "", email: "" }
        });
        this.getData();
      });
  }

  removeFriend(id) {
    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      // console.log(response);
      this.getData();
    });
  }

  editFriend(id) {
    axios.put(`http://localhost:5000/friends/${id}`).then(response => {
      // console.log(response);
      this.getData();
    });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Col sm={4}>
              <FriendComponent
                key={friend.id}
                friend={friend}
                removeFriend={this.removeFriend}
                editFriend={this.editFriend}
                newFriend={this.state.newFriend}
              />
            </Col>
          ))}
        </Row>
        <FormComponent
          handleChange={this.handleChange}
          submit={this.addFriend}
          newFriend={this.state.newFriend}
        />
      </Container>
    );
  }
  getData() {
    console.log("Got Data");
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    });
  }
  componentDidMount() {
    this.getData();
  }
}

export default App;
