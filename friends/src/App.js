import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import FriendsContent from './components/FriendsList/FriendsContent.js';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Title>
          <h1>Friends</h1>
        </Title>
        <FriendsContent />
      </StyledApp>
    );
  }
}

export default App;
