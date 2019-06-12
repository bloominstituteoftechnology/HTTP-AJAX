import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';

export default class FriendsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      friends: [],
      isLoading: false,
    }
  }

  fetchFriends = () => {
    this.setState({isLoading: true})
    axios.get('http://localhost:5000/friends/')
      .then(response => {
        this.setState({
          friends: response.data,
        })
      })
      .catch(error => {
        error.response && console.error(error.response.statusText)
      })
      .finally(()=> this.setState({isLoading: false}))
  }

  componentDidMount() {
    this.fetchFriends();
  }

  render() {
    const { friends, isLoading } = this.state;
    const StyledNavLinks = styled(NavLink)`
      padding: 1rem 2rem;
      margin: .5rem;
      display: inline-block;
      text-decoration: none;
      color: white;
      background: rgb(161,21,29);
    `;
    return (
      <div>
        <StyledNavLinks to='/'>Home</StyledNavLinks>
        <StyledNavLinks to='/friends'>Friends</StyledNavLinks>
        <StyledNavLinks to='/add-friend'>Add New Friend</StyledNavLinks>
        
        <Route
          exact
          path='/friends'
          render={(props) => 
            <FriendsList {...props} 
              friends={friends} 
              isLoading={isLoading} 
            />
          }
        />
        <Route
          exact
          path='/add-friend'
          component={NewFriendForm}
        />
      </div>
    )
  }
}
