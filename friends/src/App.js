import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendComponent from "./components/FriendComponent";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card
} from "reactstrap";

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
    var newArr = this.state.friends;
    newArr.push(this.state.newFriend);
    this.setState({
      // friends: newArr,
      newFriend: { name: "", age: "", email: "" }
    });
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Col sm={4}>
              <FriendComponent key={friend.id} friend={friend} />
            </Col>
          ))}
        </Row>
        <Row className="my-5">
          <Form
            className="mx-auto"
            onSubmit={this.addFriend}
            onChange={this.handleChange}
          >
            <FormGroup row>
              <Label for="friendName" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  id="friendName"
                  placeholder="Type in your friend's name!"
                  value={this.state.newFriend.name}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="friendAge" sm={2}>
                Age
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="age"
                  id="friendAge"
                  placeholder="Type in your friend's age!"
                  value={this.state.newFriend.age}
                  pattern="[0-9]+"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="friendEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="friendEmail"
                  placeholder="Type in your friends e-mail!"
                  value={this.state.newFriend.email}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3} className="mx-auto">
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    });
  }
}

export default App;
