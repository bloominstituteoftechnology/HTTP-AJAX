import React from "react";
import axios from "axios";
import FriendCard from "./FriendCard";
import Home from './Home'

class Friend extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(respone => {
        this.setState({ friends: respone.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Home />
        <div className="friend-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <FriendCard friendProp={this.state} />
      </div>
    );
  }
}
export default Friend;