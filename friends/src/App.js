import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/friendslist";
import { Route } from "react-router-dom";
import { Input, Button, FormGroup } from "@material-ui/core";
import FriendProfile from './components/friendProfile';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age:'',
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {

        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(
          "I will catch you my pretty! And your little dog too!",
          err
        );
      });
  }

  addNewFriend = () => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: "",
          editFriendid: "",
          deleteFriendId:""
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = (id) => {
    const friendUpdateObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, friendUpdateObj)
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Route
         exact path="/friends"
          render={props => <FriendsList friends={this.state.friends} {...props} />}
        />
        <Route
         path="/friends/:id"
          render={props => <FriendProfile friends={this.state.friends} {...props} />}
        />
        {/* <Route path="/friends/:id" render={() => (<FriendsProfile friends={this.state.friends} {...props} />)} /> */}
        <FormGroup row>
          <Input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Name"
          /> {""}
          <Input
            onChange={this.handleChange}
            name="age"
            value={this.state.age}
            type="number"
            placeholder="age"
          /> {" "}
          <Input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <Button onClick={this.addNewFriend}> Add</Button>
      </div>
    );
  }
}

export default App;
