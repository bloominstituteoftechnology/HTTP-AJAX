import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DisplayFriend.css";

class DisplayFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateInput: false,
      name: "",
      age: "",
      email: ""
    };
  }

  showUpdateInput = () => {
    this.setState({ showUpdateInput: !this.state.showUpdateInput });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriend = id => {
    const friend = {};
    if (this.state.title !== "") friend.name = this.state.name;
    if (this.state.age !== "") friend.age = this.state.age;
    if (this.state.email !== "") friend.email = this.state.email;

    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        this.setState({ showUpdateInput: false, name: "", age: "", email: "" });
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { friend } = this.props;
    return (
      <li className="friend">
        <Link
          to={{
            pathname: `/friends/${friend.id}`,

            state: {
              name: `${friend.name}`,

              age: `${friend.age}`,

              email: `${friend.email}`
            }
          }}
        >
          <div className="name">{friend.name}</div>
        </Link>
        <div className="age">{`Age:${friend.age}`}</div>
        <div className="email">{`E-mail:${friend.email}`}</div>
        <button className={friend.id} onClick={this.props.removeFriend}>
          Remove Friend{" "}
        </button>
        <button onClick={this.showUpdateInput}>Update Friend</button>
        {this.state.showUpdateInput ? (
          <div className="innerInput">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <input
              type="number"
              placeholder="Age"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <button onClick={() => this.updateFriend(friend.id)}>
              Save Changes
            </button>
          </div>
        ) : null}
      </li>
    );
  }
}

export default DisplayFriend;
