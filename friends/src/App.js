import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";
import InputForm from "./components/InputForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));

    console.log(this.props.history);

    const unlisten = this.props.history.listen((location, action) => {
      // location is an object like window.location
      if (action === "POP") {
        let backFriend = this.state.friends.slice();
        let info = backFriend.pop();
        backFriend.pop();
        this.setState(prevState => ({
          ...prevState,
          friends: backFriend,
          name: info.name,
          age: info.age,
          email: info.email
        }));
      }
      console.log(action, location.pathname, location.state);
    });

    console.log(unlisten);

    // this.backListener = this.props.history.listen(location => {
    //   if (location.action === "POP") {
    //     console.log("went back");
    //     let backFriend = this.state.friends.slice();
    //     backFriend = backFriend.pop();
    //     this.setState({ friends: backFriend });
    //     // Do your stuff
    //   }
    // });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    };

    if ((newFriend.name || newFriend.age || newFriend.email) === "") {
      return;
    }

    if (this.state.id.length > 0) {
      let index = this.state.friends.findIndex(
        friend => friend.id === parseInt(this.state.id)
      );
      axios
        .put(`http://localhost:5000/friends/${index + 1}`, newFriend)
        .then(res =>
          this.setState({
            friends: res.data,
            name: "",
            age: "",
            email: "",
            id: ""
          })
        )
        .catch(err => console.log(err));
    } else {
      axios
        .post(`http://localhost:5000/friends`, newFriend)
        .then(res =>
          this.setState({
            friends: res.data,
            name: "",
            age: "",
            email: "",
            id: ""
          })
        )
        .catch(err => console.log(err));
    }
  };

  delete = e => {
    e.stopPropagation();
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  reveal = () => {
    this.props.history.push("/edit");
  };
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              delete={this.delete}
              onClick={this.reveal}
            />
          )}
        />
        <Route
          path="/edit"
          render={props => (
            <InputForm
              {...props}
              info={this.state}
              change={this.handleChange}
              submit={this.handleSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
