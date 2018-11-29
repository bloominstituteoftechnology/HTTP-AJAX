import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendList";
import Form from "./components/Form";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  modifyFriend = (id, data) => {
    console.log(data);
    console.log(id);
    axios
      .put(`http://localhost:5000/friends/${id}`, data)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="title">Friends List</h1>
          <div className="nav-links">
            <NavLink exact to="/">
              <button>Home</button>
            </NavLink>
            <NavLink exact to="/friends">
              <button>Friends List</button>
            </NavLink>
            <NavLink exact to="/friends">
              <button>Add / Update</button>
            </NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />

        <Route
          exact
          path="/friends"
          render={props => (
            <Form
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
              modifyFriend={this.modifyFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
