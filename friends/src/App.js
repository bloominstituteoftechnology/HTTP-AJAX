import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Container} from 'reactstrap';

/** My custom components */
import { FriendCard, Form, FriendsList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jesuarva: an HTTP-based Friends API </h1>
        </header>
        <Container>
          <Route path="/" component={Form} />
          <Route path="/" component={FriendCard} />
          <Route path='/' component={FriendsList} />
        </Container>
      </div>
    );
  }
}

export default App;
