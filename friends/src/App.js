import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import NewFriendForm from "./components/NewFriendForm";
import FriendCard from "./components/FriendCard";

import FriendList from "./components/FriendList";
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: 0,
        email: ""
      },
      currentId: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  numberInputChange = e => {
    e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: parseInt(e.target.value)
      }
    });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response =>
        this.setState({
          friends: response.data,
          newFriend: { name: "", age: 0, email: "" }
        })
      )
      .catch(error => console.log(error));
  };

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div style={{paddingBottom: '20px'}}>
        <Switch>
          <Route exact path="/">
            <Link to="/friends">
              <div>Click Here to Access Friends</div>
            </Link>
          </Route>
        </Switch>
        
          <Route
            exact path="/friends"
            render={props => (
              <FriendList
                {...props}
                friends={this.state.friends}
                updateFriend={this.updateFriend}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
          <Route
            exact
            path="/friends/:id"
            render={props => (
              <FriendCard
                {...props}
                friends={this.state.friends}
                updateFriend={this.updateFriend}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
        
        <Route
          exact
          path="/friends"
          render={props => (
            <NewFriendForm
              {...props}
              inputChange={this.inputChange}
              addNewFriend={this.addNewFriend}
              numberInputChange={this.numberInputChange}
              newFriend={this.state.newFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
