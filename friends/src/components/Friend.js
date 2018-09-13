import React, { Component } from 'react';
import axios from 'axios';

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
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
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.friends) {
      return <div>Are you sure you have friends?...</div>;
    }

    const { name, age, email } = this.state.friends;
    return (
      <div className="friend-wrapper">
        <div className="friend-card">
          <h2>{name}</h2>
          <div className="friend-age">
            Age: <strong>{this.state.friends.age}</strong>
          </div>
          <div className="friend-email">
            Email: <strong>{this.state.friends.email}</strong>
          </div>
        </div>
        <div className="update-button">Update</div>
      </div>
    );
  }
}
