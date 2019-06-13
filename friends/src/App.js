import React from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    console.log("You just added a friend dawg!");
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = (id, updatedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/" component={Home} />

        <Route
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          path="/add-friend"
          render={props => (
            <FriendForm
              {...props}
              updateFriend={this.updateFriend}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
              friends={this.state.friends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
