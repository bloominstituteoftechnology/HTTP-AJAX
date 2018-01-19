import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './Friend.css';

export default class Friend extends Component {
  state = {
    friends: [],
    me: {},
    name: '',
    age: '',
    email: '',
    isEditing: false,
    confirmDelete: false,
  };

  componentDidMount() {
    const stream = 'http://localhost:5000/friends';

    axios
      .get(stream)
      .then(response => {
        this.setState({ friends: response.data });
        this.findMeAmong(response.data);
      })
      .catch(() => {
        console.error('unknown error');
      });
  }

  findMeAmong(friends) {
    friends.forEach(friend => {
      // console.log(friend.id);
      // console.log(this.props.match.params.id);
      // console.log(friend.id === Number(this.props.match.params.id));
      if (friend.id === Number(this.props.match.params.id)) {
        // console.log(this.state.me);
        this.setState({ me: { ...friend } });
        // this.setState({
        //   name: friend.name,
        //   age: friend.age,
        //   email: friend.email,
        // });
        return;
      }
    });
  }

  editButtonPressed(event) {
    this.setState({ isEditing: true });
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

  cancelButtonPressed(event) {
    this.setState({
      name: '',
      age: '',
      email: '',
      isEditing: false,
    });
  }

  submitButtonPressed(event) {
    const me = { ...this.state.me };
    me.name = this.state.name;
    me.age = Number(this.state.age);
    me.email = this.state.email;

    // console.log(this.props.match.params.id);

    axios
      .put(`http://localhost:5000/friends/${this.props.match.params.id}`, {
        name: me.name,
        age: me.age,
        email: me.email,
      })
      .then(response => {
        this.findMeAmong(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    this.setState({
      name: '',
      age: '',
      email: '',
      isEditing: false,
    });
  }

  deleteFriendButtonPressed() {
    this.setState({ confirmDelete: true });
  }

  cancelDelete() {
    this.setState({ confirmDelete: false });
  }

  deleteFriend(event) {
    axios
      .delete(`http://localhost:5000/friends/${this.props.match.params.id}`)
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="MeContainer">
        {this.state.isEditing ? (
          <div className="FriendEditContainer">
            <button
              onClick={this.cancelButtonPressed.bind(this)}
              className="EditButton"
            >
              cancel
            </button>

            <label>
              <input
                className="InputName"
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName.bind(this)}
                placeholder={this.state.me.name}
                style={{
                  fontWeight: '300',
                  fontSize: '2rem',
                }}
              />
            </label>

            <label>
              <input
                className="InputAge"
                type="text"
                value={this.state.age}
                onChange={this.handleChangeAge.bind(this)}
                placeholder={`Age: ${this.state.me.age}`}
                style={{ paddingTop: '8px', fontSize: '0.9rem' }}
              />
            </label>

            <label>
              <input
                className="InputEmail"
                type="text"
                value={this.state.email}
                onChange={this.handleChangeEmail.bind(this)}
                placeholder={`Email: ${this.state.me.email}`}
                style={{ fontSize: '0.8rem' }}
              />
            </label>

            <br />

            <button
              onClick={this.submitButtonPressed.bind(this)}
              className="EditButton"
            >
              submit
            </button>
          </div>
        ) : (
          <div className="FriendContainer">
            <button
              onClick={this.editButtonPressed.bind(this)}
              className="EditButton"
            >
              edit
            </button>
            <div className="friend-title">{this.state.me.name}</div>
            <div className="friend-age">{`Age: ${this.state.me.age}`}</div>
            <div className="friend-email">{`Email: ${
              this.state.me.email
            }`}</div>
          </div>
        )}

        {this.state.confirmDelete ? (
          <div className="DeleteButtons">
            <button
              className="CancelButton"
              onClick={this.cancelDelete.bind(this)}
            >
              cancel
            </button>

            <br />

            <NavLink to="/">
              <button onClick={this.deleteFriend.bind(this)}>
                confirm delete
              </button>
            </NavLink>
          </div>
        ) : (
          <button onClick={this.deleteFriendButtonPressed.bind(this)}>
            delete friend
          </button>
        )}
      </div>
    );
  }
}
