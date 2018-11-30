import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import styled, { createGlobalStyle } from "styled-components";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Friend from "./components/Friend";
import AddFriendsForm from "./components/AddFriendsForm";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 62.5%;
}

button {
    text-transform: uppercase;
    border-radius: 35px;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    width: auto;
    align-self: flex-start;
    margin-left: 1rem;
    max-width: 47%;
    font-size: 0.6rem;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px rgb(255, 255, 255);
    outline: none;
    background: blue;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    letter-spacing: 1.8px;

    &:hover {
      top: 2px;
      box-shadow: 0 2px rgb(255, 255, 255);
    }

    &:active {
      box-shadow: 0 0 rgb(255, 255, 255);
      top: 4px;
    }
  }
`;

const BodyTag = styled.div`
  background-color: #0d3179;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  text-align: center;
`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: 0,
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/")
      .then(res => {
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = data => {
    axios
      .post("http://localhost:5000/friends/", data)
      .then(res => {
        console.log(res);
        this.setState({
          friendsData: res.data
        });
        this.props.history.push("/friendslist");
      })

      .catch(function(err) {
        console.log(err);
      });
  };

  editFriend = (data, id) => {
    console.log("DATA", data);

    axios
      .put(`http://localhost:5000/friends/${id}`, data)
      .then(res => {
        console.log(res);
        this.setState({
          friendsData: res.data
        });
        this.props.history.push("/friendslist");
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <BodyTag className="App">
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/friendslist"
            render={props => (
              <FriendsList
                {...props}
                friendsData={this.state.friendsData}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
          <Route
            exact
            path="/friends/:id"
            render={props => (
              <Friend
                {...props}
                friendsData={this.state.friendsData}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
          <Route
            exact
            path="/addfriend"
            render={props => (
              <AddFriendsForm
                {...props}
                addFriend={this.addFriend}
                handleChange={this.handleChange}
                stateProps={this.state}
              />
            )}
          />
          <Route
            exact
            path="/friend-edit/:id"
            render={props => (
              <AddFriendsForm
                {...props}
                editFriend={this.editFriend}
                stateProps={this.state}
                handleChange={this.handleChange}
              />
            )}
          />
        </BodyTag>
      </>
    );
  }
}

export default withRouter(App);
