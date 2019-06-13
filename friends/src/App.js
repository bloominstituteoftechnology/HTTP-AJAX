import React from "react";
import axios from "axios";
import "./App.css";
import {React.R}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refOne = React.createRef();
    this.state = {
      friends: [],
      errorMessage: "",
      newFriendName: "",
      newFriendAge: "",
      newFriendEmail: "",
      spinner: false
    };
  }

  fetchFriends() {
    this.setState({ spinner: true });
    fetch("http://localhost:5000/friends")
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        this.setState({ friends: parsedData });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  }

  componentDidMount() {
    this.fetchFriends();
  }

  changeNewFriendName = event => {
    this.setState({ newFriendName: event.target.value });
  };

  changeNewFriendAge = event => {
    this.setState({ newFriendAge: event.target.value });
  };

  changeNewFriendEmail = event => {
    this.setState({ newFriendEmail: event.target.value });
  };

  submitFriend = () => {
    const newFriend = {
      name: this.state.newFriendName,
      age: this.state.newFriendAge,
      email: this.state.newFriendEmail
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(() => this.fetchFriends())
      .catch(() =>
        this.setState({ errorMessage: "Friend could not be sumbitted" })
      );
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(() => this.fetchFriends())
      .catch(() =>
        this.setState({ errorMessage: "Friend could not be deleted" })
      );
  };

  modifyFriend = id => {};

  render() {
    return (
      <div className="App">
        <h1>All your few friends:</h1>
        {this.state.errorMessage && <div> {this.state.errorMessage} </div>}
        {this.state.spinner && <div> Data is fetching... </div>}
        <div>
          {this.state.friends.map(friend => (
            <div className="contentDiv">
              <span>Name: {friend.name}</span>
              <span>Age: {friend.age}</span>
              <span>Email: {friend.email}</span>
              <span>
                <button onClick={() => this.deleteFriend(friend.id)}>
                  Delete
                </button>
                <button onClick={() => this.modifyFriend(friend.id)}>
                  Modify
                </button>
              </span>
            </div>
          ))}
        </div>
        <br />
        <form onSubmit={this.submitFriend}>
          <input
            onChange={this.changeNewFriendName}
            value={this.state.newFriendName}
            placeholder="Name"
            type="text"
          />
          <input
            onChange={this.changeNewFriendAge}
            value={this.state.newFriendAge}
            placeholder="Age"
            type="number"
          />
          <input
            onChange={this.changeNewFriendEmail}
            value={this.state.changeNewFriendEmail}
            placeholder="Email"
            type="text"
          />
          <input type="submit" value="Add new friend" />
        </form>
      </div>
    );
  }
}

export default App;
