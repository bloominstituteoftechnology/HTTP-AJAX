import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Friends from './Components/friends';
import styled from 'styled-components';
import AddFriend from './Components/addFriendForm';

const AppContainer = styled.div `
max-width: 500px;
width:100%;
display: flex;
margin: 0 auto;
margin-top: 60px;


`



class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <AddFriend />
        <Route exact path='/' render={Friends} />
      </AppContainer>
    );
  }
}

export default App;
