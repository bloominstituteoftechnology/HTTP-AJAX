import React, { Component } from "react";
import axios from "axios";
import "../App.css";

// import { Link } from "react-router-dom";

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    // this.fetchFriend(this.props.match.params.id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.props.friend) {
      return <div>Loading friends information...</div>;
    }

    const { name, age, email } = this.props.friend;
    return (
      <div className="save-wrapper">
        <div className="friend-card">
          <h2>{name}</h2>
          <div className="friend-age">
            Age: <em>{age}</em>
          </div>
          <div className="friend-email">
            Email: <strong>{email}</strong>
          </div>
        </div>
      </div>
    );
  }
}
