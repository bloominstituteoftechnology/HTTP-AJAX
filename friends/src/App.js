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
    // if (
    //   this.state.name !== "" &&
    //   this.state.age !== 0 &&
    //   this.state.email !== ""
    // )
    console.log(data);

    {
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
    }
  };

  editFriend = (data, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          friendsData: res.data
        });
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
