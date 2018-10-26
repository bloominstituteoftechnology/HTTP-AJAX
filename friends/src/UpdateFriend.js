import React from 'react';
import axios from 'axios';
import { StyledFriendsList } from './Styled';

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      age: this.props.age,
      email: this.props.email
    };
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  submitUpdate = e => {
    e.preventDefault();
    const id = e.target.id;
    if (this.state.name && this.state.age && this.state.email) {
      axios
        .put(`http://localhost:5000/friends/${id}`, {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then(res => {
          this.props.submitUpdate();
        })
        .catch(() => alert('PUT Error'));
    } else {
      alert('Please enter name, age and email');
    }
  };

  render() {
    return (
      <StyledFriendsList>
        <form id={this.props.id} onSubmit={this.submitUpdate}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
            name="name"
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleInput}
            name="age"
          />
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput}
            name="email"
          />
          <button>Done</button>
        </form>
      </StyledFriendsList>
    );
  }
}

export default UpdateFriend;
