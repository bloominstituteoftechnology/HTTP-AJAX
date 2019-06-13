import React from "react";
import axios from "axios";
import "./App.css";
/* import {Router, Link, Route} from "react-router-dom"; */

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
      spinner: false,
      modifyActive: false,
      modifyId: null
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

  modifyFriend = () => {
    debugger;
    const modifiedFriend = {
      name: this.state.newFriendName,
      age: this.state.newFriendAge,
      email: this.state.newFriendEmail
    };
    axios
      .put(
        `http://localhost:5000/friends/${this.state.modifyId}`,
        modifiedFriend
      )
      .catch(() =>
        this.setState({ errorMessage: "Friend could not be modified" })
      );
    this.setState({ modifyActive: false });
  };

  activateModify = id => {
    const toModifyFriend = this.state.friends.find(el => {
      return el.id === id;
    });
    this.setState({
      modifyActive: true,
      modifyId: id,
      newFriendName: toModifyFriend.name,
      newFriendAge: toModifyFriend.age,
      newFriendEmail: toModifyFriend.email
    });
  };

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
                <button onClick={() => this.activateModify(friend.id)}>
                  Modify
                </button>
              </span>
            </div>
          ))}
        </div>
        {this.state.modifyActive ? (
          <div>
            <br />
            <form onSubmit={this.modifyFriend}>
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
                value={this.state.newFriendEmail}
                placeholder="Email"
                type="text"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
        :
          <div>
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
                value={this.state.newFriendEmail}
                placeholder="Email"
                type="text"
              />
              <input type="submit" value="Add new friend" />
            </form>
          </div>
        }
      </div>
    );
  }
}

export default App;
