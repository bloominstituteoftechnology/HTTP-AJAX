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
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addFriend = event => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post("http://localhost:5000/friends/", friend).then(response => {
      this.getFriends().catch(err => {
        console.log(err);
      });
    });
    this.setState({ name: "", age: "", email: "" });
  };

  removeFriend = e => {
    const id = e.target.className;
    axios({
      method: "DELETE",
      url: `http://localhost:5000/friends/${id}`,
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      this.getFriends();
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h2>Rainbow Friends Page</h2>
        <FriendForm
          addFriend={this.addFriend}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          getFriends={this.getFriends}
        />
        {/* <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.name}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={this.handleInputChange}
            value={this.age}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleInputChange}
            value={this.email}
          />
          <button className="button" type="submit" onClick={this.addFriend}>
            Add Rainbow Friend
          </button>
        </form> */}

        <ul className="friendlist">
          {this.state.friends.map((friend, index) => {
            return (
              <li key={friend.id} className="friend">
                <div className="name">{friend.name}</div>
                <div className="age">{`Age:${friend.age}`}</div>
                <div className="email">{`E-mail:${friend.email}`}</div>
                <button className={friend.id} onClick={this.removeFriend}>
                  Remove Friend{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
