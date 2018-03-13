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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      newFriend[name]: value
    });
  }

  addFriend(event) {
    console.log("Added Friend");
  }

  render() {
    console.log(this.state.friends);
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
                  name="friendName"
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
                  name="friendAge"
                  id="friendAge"
                  placeholder="Type in your friend's age!"
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
