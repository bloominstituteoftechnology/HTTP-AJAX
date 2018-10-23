import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

const App = Styled.div`
    display:flex;
    justify-content: space.between;
`;

export default class extends Component {
  render() {
    return (
      <App className="App">
        <FriendsList />
        <FriendForm />
    </App>
    );
  }
}
