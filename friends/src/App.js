import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendComponent from "./components/FriendComponent";
import FormComponent from "./components/FormComponent";

import { Card, CardTitle, CardBody, Row, Col, Container } from "reactstrap";

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
    this.retrieveFriend = this.retrieveFriend.bind(this);
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
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
      .then(response => {
        console.log(response);
        this.getData();
        this.setState({ newFriend: { name: "", age: "", email: "" } });
      });
  }

  retrieveFriend(id) {
    this.setState({ newFriend: this.state.friends[id - 1] });
  }

  render() {
    document.body.style = "background: rgba(23, 162, 184, 0.5)";
    return (
      <Container className="py-2">
        <Row className="justify-content-center my-3">
          <div className="header">Friend Face</div>
        </Row>
        <Row>
          {this.state.friends.map(friend => (
            <Col sm={6} className="mx-auto">
              <FriendComponent
                key={friend.id}
                friend={friend}
                removeFriend={this.removeFriend}
                editFriend={this.editFriend}
                newFriend={this.state.newFriend}
                handleChange={this.handleChange}
                submit={this.addFriend}
                retrieveFriend={this.retrieveFriend}
              />
            </Col>
          ))}
        </Row>
        <Card className="my-3">
          <CardBody>
            <CardTitle>Add A New Friend</CardTitle>

            <FormComponent
              handleChange={this.handleChange}
              submit={this.addFriend}
              newFriend={this.state.newFriend}
            />
          </CardBody>
        </Card>
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
