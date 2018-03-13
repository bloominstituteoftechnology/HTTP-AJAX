import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Card, CardText, CardSubtitle, CardTitle, CardImg } from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }




  render() {
    return (
      <div className="App">
        <div className="title"> Lambda Friends </div>
        <div>
          {this.state.friends.map(friend =>{
            return (
              <Card key={friend.id}>
                <CardTitle>{friend.name} </CardTitle>
                <CardSubtitle>{friend.email}</CardSubtitle>
                <CardText> {friend.age} </CardText>
              </Card>
            )
          })}
        </div>
      </div>
    );
  }


componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then(response => {
      console.log(response);
      this.setState({ friends: response.data });
      })
  .catch(error => {
      console.log(`There was an error getting friends: ${error}`);
      });
    }
}

export default App;
