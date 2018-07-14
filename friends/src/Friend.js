import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      showEditForm: false,
      editedName: '',
      editedAge: '',
      editedEmail: ''
    };
  }

  editFriendHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveEditFriend = () => {
    const editFriend = {
      name: this.state.editedName,
      age: this.state.editedAge,
      email: this.state.editedEmail
    };
    axios
      .put(`http://localhost:5000/friends/${this.props.friend.id}`, editFriend)
      .then((response) => {
        console.log(response);
        this.setState({ friends: response.data, name: '', age: '', email: '' });
      })
      .catch((error) => console.log(error));
  };
  toggleForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm });
  };

  render() {
    return (
      <div>
        {/* <button className="edit" onClick={() => this.saveEditFriend(this.props.friend.id)}>
          Edit &#10084;
        </button> */}
        <div>{this.props.friend.name}</div>
        <div>{this.props.friend.age}</div>
        <div>{this.props.friend.email}</div>
        {this.state.showEditForm ? (
          <form>
            <input
              onChange={this.editFriendHandler}
              name="editedName"
              value={this.state.editedName}
              placeholder="edit name"
            />
            <input
              onChange={this.editFriendHandler}
              name="editedAge"
              value={this.state.editedAge}
              placeholder="edit age"
            />
            <input
              onChange={this.editFriendHandler}
              name="editedEmail"
              value={this.state.editedEmail}
              placeholder="edit email"
            />
            <button onClick={this.saveEditFriend}>Confirm Edit</button>
          </form>
        ) : null}
        <button className="delete" onClick={() => this.props.handleDelete(this.props.friend.id)}>
          &#10008;
        </button>
        <button onClick={this.toggleForm}>Show edit Form</button>
      </div>
    );
  }
}

export default Friend;
