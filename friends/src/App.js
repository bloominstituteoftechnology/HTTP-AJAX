import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Card, CardText, CardTitle } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
    }
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => {
        return(
          <Card body inverse color="primary">
            <CardTitle>{friend.name}</CardTitle>
            <CardText>{`${friend.name} is ${friend.age} years old.`}</CardText>
            <CardText>{`${friend.name}'s email address is ${friend.email}.`}</CardText>
            
          </Card>
        )
      })}
        
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => console.log(err))
  }
}

export default App;
