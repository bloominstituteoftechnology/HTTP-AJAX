import React, { Component } from 'react';
import FriendsList from './components/friends-list/friends-list.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 800px;
  min-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
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
