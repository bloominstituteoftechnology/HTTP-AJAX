import React from "react";

class FriendForm extends React.Component {
  state = {
    friend: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  updateFriend = e => {
    e.preventDefault();
    this.props.updateFriend();
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="friend-form">
        <h2>Add A New Friend</h2>
        <form onSubmit={this.addFriend}>
          <input
            placeholder="Friend's Name"
            name="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
            type="text"
          />
          <input
            placeholder="Age"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
            type="number"
          />
          <input
            placeholder="Email"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
