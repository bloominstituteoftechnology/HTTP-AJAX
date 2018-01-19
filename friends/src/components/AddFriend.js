import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import './AddFriend.css';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      serverResponse: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

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
        this.setState({ serverResponse: response });
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
    // console.log(this.state.serverResponse);
    return (
      <div className="AddFriendFormContainer">
        <form className="AddFriendForm" onSubmit={this.handleSubmit}>
          <div className="AddFriendInputs">
            <label className="AddFriendInput">
              <p className="AddFriendInput--text">Name:</p>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
                placeholder="John Appleseed"
              />
            </label>

            <label className="AddFriendInput">
              <p className="AddFriendInput--text">Age:</p>
              <input
                type="text"
                value={this.state.age}
                onChange={this.handleChangeAge}
                placeholder="27"
              />
            </label>

            <label className="AddFriendInput">
              <p className="AddFriendInput--text">Email:</p>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="johnappleseed@icloud.com"
              />
            </label>
          </div>

          <input className="AddFriendButton" type="submit" value="Add friend" />
        </form>

        <div>
          {this.state.serverResponse.status === 201 ? (
            <div className="ServerResponseContainer">
              {`Your friend ${
                this.state.serverResponse.data[
                  this.state.serverResponse.data.length - 1
                ].name
              } was added as a friend!`}
              <br />
              <br />
              <NavLink to="/friends">View all your friends.</NavLink>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(AddFriend);
