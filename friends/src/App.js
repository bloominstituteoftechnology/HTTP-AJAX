import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import SingleFriend from "./components/SingleFriend";
import Friends from "./components/Friends";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: null,
        email: ""
      }
    };
  }
  componentDidMount() {
    const url = "http://localhost:5000/friends";
    axios
      .get(url)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => alert(err));
  }
  handleChange = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };
  addFriend = () => {
    let theNewFriend = {
      id: this.state.friends.length + 1,
      name: this.state.newFriend.name,
      age: this.state.newFriend.age,
      email: this.state.newFriend.email
    };
    axios.post("http://localhost:5000/friends", theNewFriend).then(response => {
      console.log(response);
      this.setState({
        friends: response
      });
    });
  };
  serverUpdateMain = (data, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, data)
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => alert(err));
  };
  serverDeleteMain = dataid => {
    console.log(dataid);
    axios
      .delete(`http://localhost:5000/friends/${dataid}`)
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          strict
          path="/:id"
          render={props => (
            <SingleFriend
              {...props}
              friends={this.state.friends}
              serverUpdateMain={this.serverUpdateMain}
              serverDeleteMain={this.serverDeleteMain}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              handleChange={this.handleChange}
              addFriend={this.addFriend}
              newFriend={this.state.newFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
