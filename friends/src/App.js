import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendFormPage from './components/Friends/FriendFormPage';
import FriendsListPage from './components/Friends/FriendsListPage';
import styled from 'styled-components';

const API_URL = 'http://localhost:5000/friends';

const AppDivElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 760px;
`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  onAddFriend = (friend) => {
    friend.age = Number(friend.age);
    axios
      .post(API_URL, friend)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data});
        window.location.href = '/';
      })
      .catch(error => console.log(error));
  };

  onUpdateFriend = (id, friend) => {
    axios
      .put(`${API_URL}/${id}`, friend)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data});
        window.location.href = '/';
      })
      .catch(error => console.log(error));
    console.log(id);
  }

  onDeleteFriend = id => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data});
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <AppDivElement>
        <Route exact path="/" render={(props) => <FriendsListPage {...props} friends={this.state.friends} onDeleteFriend={this.onDeleteFriend} />} />
        <Route path="/add" render={(props) => <FriendFormPage {...props} formType='add' onSubmitFriend={this.onAddFriend}  />} />
        <Route path="/update/:friendID" render={(props) => <FriendFormPage {...props} formType='update' onFriendChange={this.onFriendChange} onSubmitFriend={this.onUpdateFriend} friends={this.state.friends} />} />
      </AppDivElement>
    );
  }
}

export default App;
