import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/friendslist";
import { Route, Link } from "react-router-dom";
import FriendProfile from "./components/friendProfile";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: null,
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(
          "I will catch you my pretty! And your little dog too!",
          err
        );
      });
  }

  addNewFriend = e => {
    e.preventDefault();
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = (id, name, age, email) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, {
        friends: {
          name: name,
          age: age,
          email: email
        }
      })
      .then(
      response => {
        console.log(response)
        this.setState({
          friends: response.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    return () => {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(response =>
          this.setState({
            friends: response.data
          })
        )
        .catch(err => console.log(err));

    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Link to="/friends">View Friends List</Link>
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList
              friends={this.state.friends}
              {...props}
              deleteFriend={this.deleteFriend}
              handleChange={this.handleChange}
              addNewFriend={this.addNewFriend}

            />
          )}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <FriendProfile
              friends={this.state.friends}
              {...props}
              deleteFriend={this.deleteFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
