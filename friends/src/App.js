import React, { Component } from 'react';
import FriendsList from './components/friends-list/friends-list.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
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
