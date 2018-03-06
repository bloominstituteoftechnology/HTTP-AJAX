import React, { Component } from "react";
import "./App.css";
import Friend from "./Friend";
import axios from "axios";
import Form from "./Form";
import Update from "./Update";

class App extends Component {
  state = {
    friends: [],
    updateId: '',
  };

  render() {
    return (
      <div className="App">
        <div>
          <Friend
            friend={this.state.friends}
            deleteFriend={this.deleteFriend}
            passId={this.passId}
          />
        </div>
        <Update 
          friend={this.state.friends.filter(each => {
            return each.id === this.state.updateId;
          })}
          update={this.updateFriend}
        />
        <Form onCreate={this.loadFriends} />
      </div>
    );
  }

  passId = id => {
    this.setState( {updateId: id} );
  }

  updateFriend = newState => {
    const endpoint = `http://localhost:5000/friends/${this.state.updateId}`;
    axios
      .put(endpoint, newState)
      .then(response => {
        console.log('response is', response);
        this.loadFriends();
      })
      .catch(error => {
        console.log('error is', error);
      })
  }

  deleteFriend = id => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log("response from", response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log("error deleting", error);
      });
  };

  componentDidMount() {
    this.loadFriends();
  }

  // reloads the data
  loadFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log("error", error);
      });
  };
}

export default App;
