import React from "react";

class PostFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: null,
        email: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  postFriend = e => {
    e.preventDefault();
    this.props.postFriendToServer(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: null,
        email: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.postFriend}>
        <input
            type="text"
            name="name"
            value={this.state.friend.name}
            placeHolder="Name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.friend.age}
            placeHolder="Age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.friend.email}
            placeHolder="Email"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostFriendForm;
