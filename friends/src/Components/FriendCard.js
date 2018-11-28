import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class FriendCard extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        const found = response.data.find(friend => `${friend.id}` === id);
        this.setState(() => ({userInfo: found}));
      })
      .catch(error => {
        console.error(error);
      });
  };

  inputChange = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  numberInputChange = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: parseInt(e.target.value),
      },
    });
  };

  submitUpdate = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.userInfo);
  };

  render() {
    const friendProfile = this.state.userInfo;
    if (!friendProfile) {
      return <div />;
    } else {
      return (
        <div>
          <Link to="/friends">Home</Link>
          <h1>{this.state.userInfo.name}</h1>
          <div>{`Age: ${this.state.userInfo.age}`}</div>
          <div>{`Email: ${this.state.userInfo.email}`}</div>
          <form onSubmit={this.submitUpdate}>
            <input
              placeholder="Name"
              onChange={this.inputChange}
              value={this.state.userInfo.name}
              name="name"
            />
            <input
              type="number"
              placeholder="Age"
              onChange={this.numberInputChange}
              value={this.state.userInfo.age}
              name="age"
            />
            <input
              placeholder="Email"
              onChange={this.inputChange}
              value={this.state.userInfo.email}
              name="email"
            />
            <button type="submit">Update Friend</button>
          </form>
        </div>
      );
    }
  }
}
