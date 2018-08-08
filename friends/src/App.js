import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import { Route } from "react-router-dom";

const url = "http://localhost:5000/friends";

class App extends Component {
  state = {
    friends: [],
    loading: true,
  };

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data,
        loading: false,
      });
    });
  }

  handleAddFriend = (name, age, email) => {
    let friend = {
      id: this.state.friends.length + 2,
      name: name,
      age: age,
      email: email,
    };
    axios
      .post(url, friend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(response => {
        console.log(`error ${response}`);
      });
  };

  handleDelete = id => {
    axios.delete(`${url}/${id}`).then(response => {
      this.setState({ friends: response.data });
    });
  };

  handleUpdate = friend => {
    axios.put(`${url}/${friend.id}`, friend).then(response => {
      this.setState({ friends: response.data })
    })
  }
  

  render() {
    return (
      <div>
        <FriendsList
          friends={this.state.friends}
          loading={this.state.loading}
          deleteFriend={this.handleDelete}
          updateFriend={this.handleUpdate}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
        <Route
          path="/add"
          render={props => (
            <AddFriend {...props} addFriend={this.handleAddFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
