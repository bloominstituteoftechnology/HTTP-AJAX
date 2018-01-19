import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './FriendsList.css';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const stream = 'http://localhost:5000/friends';

    axios
      .get(stream)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(() => {
        console.error('unknown error');
      });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeAge(event) {
    this.setState({ age: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const stream = 'http://localhost:5000/friends';

    axios
      .post(stream, {
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email,
      })
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    // const stream = 'http://localhost:5000/friends';

    // axios
    //   .get(stream)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(() => {
    //     console.error('unknown error');
    //   });
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>

        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
