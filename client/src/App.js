import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import bg from './bg.jpg';

import FriendList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import Navbar from './components/Navbar';
import { Container } from './styles';

const API_URL = 'http://localhost:5000';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`;

const Landing = styled.div`
  height: calc(100vh - 8.5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 1rem;
  margin-bottom: 3rem;
  text-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4);
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: #212121;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.9;
  background-color: #ffeb3b;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const FormWrapper = styled.div`
  max-width: 50rem;
  width: 100%;
  padding: 3rem;
  background-color: rgba(0, 188, 212, 0.45);
  border-radius: 3px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
`;

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/friends`)
      .then(response => this.setState({ friends: response.data }));
  }

  addFriend = data => {
    axios
      .post(`${API_URL}/friends`, data)
      .then(response => this.setState({ friends: response.data }));
  };

  updateFriend = (id, data) => {
    axios
      .put(`${API_URL}/friends/${id}`, data)
      .then(response => this.setState({ friends: response.data }));
  };

  deleteFriend = id => {
    axios
      .delete(`${API_URL}/friends/${id}`)
      .then(response => this.setState({ friends: response.data }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <Landing>
              <Title>Friends Manager</Title>
              <LinkButton to="/friends">View your friends</LinkButton>
            </Landing>
          )}
        />
        <Route
          exact
          path="/friends"
          render={() => (
            <FriendList
              onDelete={this.deleteFriend}
              onUpdate={this.updateFriend}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={props => (
            <Landing>
              <FormWrapper>
                <FriendsForm
                  {...props}
                  title="Add new friend"
                  onSubmit={this.addFriend}
                />
              </FormWrapper>
            </Landing>
          )}
        />
      </div>
    );
  }
}

export default App;
