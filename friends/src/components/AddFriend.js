import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

import './AddFriend.css';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // const stream = 'http://localhost:5000/friends';
    // axios
    //   .get(stream)
    //   .then(response => {
    //     this.setState({ friends: response.data });
    //   })
    //   .catch(() => {
    //     console.error('unknown error');
    //   });
  }

  handleChangeName(event) {
    console.log(event.target.value);
    console.log(this);
    this.state.setState({ name: event.target.value });
  }

  handleChangeAge(event) {
    this.state.setState({ age: event.target.value });
  }

  handleChangeEmail(event) {
    this.state.setState({ email: event.target.value });
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
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    this.state.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
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
          <input
            className="AddFriendButton"
            type="submit"
            value="Submit form"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(AddFriend);
