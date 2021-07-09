import React from "react";
import axios from "axios";
import FriendList from "./FriendsList";
import Home from './Home'

class Friend extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  getFriends = () => {
    axios
      .get("http://localhost:5000/friends/")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = friendId => {
    axios
      .delete(`http://localhost:5000/friends/delete:${friendId}`)
      .then(response => {
        this.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = friendId => {
    const note = {};
    if (this.state.title !== '') {
      note.title = this.state.title;
    }
    if (this.state.textBody !== '') {
      note.textBody = this.state.textBody;
    }
    axios
      .put(`http://localhost:5000/friends/edit/${friendId}`, note)
      .then(response => {
        this.setState({ showUpdateFriend: false, title: '', textBody: '' });
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    return (
      <div>
        <Home />
        <div className="friend-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <FriendList friendProp={this.state} />
      </div>
    );
  }
}
export default Friend;