import React, { Component } from 'react';
import axios from "axios";
import FriendsList from "./components/FriendsList";
import './reset.css';
import styled from 'styled-components';
import Friend from './components/Friend';
import LinkedFriend from './components/LinkedFriend';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Contain = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 15px auto;
`;

const SubForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: solid black 1px;
  padding 1%;
  font-size: 1.2rem;
  background-color: lightgreen;
  margin-left: 1%;
  > input {
    margin: 2.5px 0;
  }
`;

const SubmitBTN = styled.button`
  margin-left: 1%;
  margin-top: 5px;
  padding: 1%;
  font-size: 1.2rem;
  background-color: lightgrey;
  border: solid black 1px;
  border-radius: 4px;
  &:hover {
    color: lightgrey;
    background-color: black;
    border: solid lightgrey 1px;
    cursor: pointer;
  }
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: "",
    };
  }

  handleData = data => this.setState({ friendsData: data });

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("get response: ", response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmitFriend = () => {
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("post response:", response);
        this.setState({friendsData: response.data, name: "", age: "", email: ""});
      })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <Contain>
        <Route
          exact
          path="/"
          render={props => (
          <div>
            <FriendsList
              {...props}
              friends={this.state.friendsData}
              handleData={this.handleData}
            />
            <SubForm>
              Name:
               <input
                type="text"
                placehoder="friend name"
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
              /><br />
              Age:
              <input
                type="text"
                placehoder="friend age"
                onChange={this.handleChange}
                name="age"
                value={this.state.age}
              /><br />
              Email:
              <input
                type="text"
                placehoder="friend email"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
              </SubForm>
            <SubmitBTN onClick={this.handleSubmitFriend}>Submit friend</SubmitBTN>
          </div>
          )}
        />
        <Route path="/:id" component={LinkedFriend} />
      </Contain>
    );
  }
}

export default App;
