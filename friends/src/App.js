import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'

import FriendsList from './components/FriendsList';
import Friend from './components/Friend';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to={`/friends`}>
          <div className="home-button">Home</div>
        </Link>
        <Route exact path="/friends" component={FriendsList} />
        <Route path="/friends/:id" render={
          (props) => {
            return (
              <Friend {...props} />
            )
          }}
        />
      </div>
    );
  }
}

export default App;