import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FriendsList from './FriendsList.js';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

class FriendsContent extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <ContentWrapper>
        <FriendsList friends={this.state.friends} />
      </ContentWrapper>
    )
  }
}

export default FriendsContent;
