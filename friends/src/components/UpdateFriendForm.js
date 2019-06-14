import React from "react";

class UpdateFriendForm extends React.Component {
  state = {
    friend: this.props.activeFriend
  };

  updateFriend = e => {
    e.preventDefault();

    this.props.updateFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    console.log(this.props);
    return (
      <div className="friend-form">
        <h2>Update A Friend</h2>
        <form onSubmit={this.updateFriend}>
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

export default UpdateFriendForm;
