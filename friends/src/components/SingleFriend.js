import React, { Component } from "react";

class SingleFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleFriendData: {
        name: "",
        age: null,
        email: ""
      }
    };
  }
  componentDidMount() {
    const singleFriend = this.props.friends.find(
      friend => friend.id === Number(this.props.match.params.id)
    );
    this.setState({
      singleFriendData: {
        ...singleFriend,
        name: singleFriend.name,
        age: singleFriend.age,
        email: singleFriend.email
      }
    });
  }
  // componentWillReceiveProps(newProps) {
  //   if (this.props.friends !== newProps.friends) {
  //     const singleFriend = newProps.friends.find(friend => {
  //       return friend.id === Number(this.props.match.params.id);
  //     });
  //     this.setState({
  //       singleFriendData: {
  //         ...singleFriend,
  //         name: singleFriend.name,
  //         age: singleFriend.age,
  //         email: singleFriend.email
  //       }
  //     });
  //   }
  // }
  goBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  };

  handleUpdate = event => {
    this.setState({
      singleFriendData: {
        ...this.state.singleFriendData,
        [event.target.name]: event.target.value
      }
    });
  };
  serverUpdate = event => {
    event.preventDefault();
    this.props.history.goBack();
    const serverUpdateMain = this.props.serverUpdateMain;
    serverUpdateMain(
      this.state.singleFriendData,
      this.state.singleFriendData.id
    );
  };
  deleteItem = event => {
    event.preventDefault();
    this.props.history.goBack();
    const serverDeleteMain = this.props.serverDeleteMain;
    serverDeleteMain(this.state.singleFriendData.id);
  };

  render() {
    return (
      <div>
        {/* <h1>{this.state.singleFriendData.name}</h1>
        <h1>{this.state.singleFriendData.age}</h1>
        <h1>{this.state.singleFriendData.email}</h1> */}
        <form onSubmit={this.serverUpdate}>
          <input
            value={this.state.singleFriendData.name}
            onChange={this.handleUpdate}
            name="name"
          />
          <input
            value={this.state.singleFriendData.age}
            onChange={this.handleUpdate}
            name="age"
          />
          <input
            value={this.state.singleFriendData.email}
            onChange={this.handleUpdate}
            name="email"
          />
          <input type="submit" onSubmit={this.serverUpdate} />
          <button onClick={this.deleteItem}>Delete</button>
        </form>
        <button onClick={this.goBack}>Go back</button>
      </div>
    );
  }
}

export default SingleFriend;
