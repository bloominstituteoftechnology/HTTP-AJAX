import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FriendForm from "./FriendForm";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
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
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post("http://localhost:5000/friends/", friend).then(response => {
      this.setState({ name: "", age: "", email: "" }).catch(err => {
        console.log(err);
      });
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h2>Rainbow Friends Page</h2>
        <FriendForm
          addFriend={this.addFriend}
          handleInputChange={this.handleInputChange}
        />

        <ul className="friendlist">
          {this.state.friends.map((friend, index) => {
            return (
              <li key={index} className="friend">
                <div className="name">{friend.name}</div>
                <div className="age">{`Age:${friend.age}`}</div>
                <div className="email">{`E-mail:${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
