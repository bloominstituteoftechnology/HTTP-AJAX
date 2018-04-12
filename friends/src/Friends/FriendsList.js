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

  render() {
    return (
      <div className="friend-list">
        {this.props.friends.map(friend => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}
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
