import React, { Component } from 'react';
import FriendsList from './components/friends-list/friends-list.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 800px;
  min-width: 500px;
  margin: 0 auto;
  background-color: lightgray;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <FriendsList /> 
      </StyledDiv>
    );
  }
}

export default App;
