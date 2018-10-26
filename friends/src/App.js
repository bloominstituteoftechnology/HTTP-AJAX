import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Friends from './components/Friends';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import UpdateFriend from './components/UpdateFriend';

import styled from 'styled-components';

const Img = styled.img`
    padding-top: 20px;
    opacity: .5;
    filter: alpha(opacity=50);

    &:hover {
      opacity: 1;
      filter: alpha(opacity=100);
      transition: opacity .5s;
    }
`;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        friends: [],
    }
}

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends : response.data })
        })
        .catch(err => {
            console.log(err)
        })
  };

  addFriend = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => 
        this.setState({ friends : response.data }));
        this.props.history.push('/friends');
  }

  updateFriend = (id, name, age, email) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, {
          name: name,
          age: age,
          email: email,
      })
      .then(response =>
        this.setState({ friends : response.data }));
        this.props.history.push('/friends');
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response =>
        this.setState({ friends : response.data }));
    
    this.props.history.push('/friends');
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/friends" render={ props => (
          <Friends {...props} friends={this.state.friends} delete={this.deleteFriend} />
        )} />
        <Route path="/friends/:id" render={ props => (
          <Friend {...props} friends={this.state.friends} delete={this.deleteFriend} />
        )} />
        <Route path="/add" render={ props => (
          <FriendForm friends={this.state.friends} add={this.addFriend} />
        )} />
        <Route path="/update" render={ props => (
          <UpdateFriend friends={this.state.friends} update={this.updateFriend} />
        )} />
        <Img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/09/2560x1280/1488375399-landscape-1488370326-friends-cast.jpg" />
      </div>
    );
  }
}

export default withRouter(App);
