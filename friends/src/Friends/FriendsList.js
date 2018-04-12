import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class FriendsList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       friends: []
  //     };
  //   }

  //   componentDidMount() {
  //     axios
  //       .get("http://localhost:5000/friends")
  //       .then(response => {
  //         this.setState(() => ({ friends: response.data }));
  //       })
  //       .catch(error => {
  //         console.error("Server Error", error);
  //       });
  //   }
  handleTextInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addFriend = () => {
    console.log("here it is");
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(savedFriend => {
        console.log(savedFriend);
      })
      .catch(err => {
        console.log("You done fucked up", err);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <form>
          Name:{" "}
          <input onChange={this.handleTextInput} type="text" name="name" />
          Age: <input onChange={this.handleTextInput} type="text" name="age" />
          Email:{" "}
          <input onChange={this.handleTextInput} type="text" name="email" />
          <button onClick={this.addFriend}> Submit </button>
        </form>

        <div className="friend-list">
          {this.props.friends.map(friend => (
            <FriendDetails key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    );
  }
}

function FriendDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <Link to={`/friends/${friend.id}`}>
      <div className="friend-card">
        <h2>{name}</h2>
        <div className="friend-age">
          Age: <em>{age}</em>
        </div>
        <div className="friend-email">
          Email: <strong>{email}</strong>
        </div>
      </div>
    </Link>
  );
}
