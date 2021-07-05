import React, { Component } from 'react';
import axios from 'axios';

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friend: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.friend) {
      return <div>Are you sure you have friends?...</div>;
    }
    return (
      <div className="friend-wrapper">
        <div className="friend-card">
          <h2>{this.state.friend.name}</h2>
          <div className="friend-age">
            Age: <strong>{this.state.friend.age}</strong>
          </div>
          <div className="friend-email">
            Email: <strong>{this.state.friend.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}
