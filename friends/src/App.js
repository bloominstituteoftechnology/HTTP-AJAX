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
        <Link to={`/`}>
          <div className="home-button mt-3">Home</div>
        </Link>
        <Route exact path="/" render={
          () => {
            return (
              <Link to={`/friends`}>
                <div className="home-button mt-3">Friendslist</div>
              </Link>
            )
          }}
        />
        <Route exact path="/friends" component={FriendsList} />
        <Route path="/friends/:id" render={
          (props) => {
            return (
              <div>
                <Link to={`/friends`}>
                  <div className="home-button mt-3">Friendslist</div>
                </Link>
                <Friend {...props} />
              </div>
            )
          }}
        />
      </div>
    );
  }
}

export default App;