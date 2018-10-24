import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import FriendsContent from './components/FriendsList/FriendsContent.js';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsContent />
      </div>
    );
  }
}

export default App;
