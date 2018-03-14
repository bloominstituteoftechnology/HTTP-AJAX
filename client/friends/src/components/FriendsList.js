import React, { Component } from 'react';
import axios from 'axios';
import './FriendList.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';


class FriendsList extends Component {
  state = {
      friends: []
    }
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`There was an error getting friends: ${error}`);
    });
  }

  
  render() {
    return (
      <div className="friendsContainer">
        
        {this.props.masterList.map(friend => {
          return (
            <ListGroup className="friendListGroup" key={friend.id}>
            <ListGroupItem  className="friends">
            <div className="friendName">Name: {friend.name}</div>
            <div className="friendAge">Age: {friend.age}</div>
            <div className="friendEmail">Email: {friend.email}</div>
            <Button>Delete</Button>
            </ListGroupItem>
            </ListGroup>
          )
        })}
        
      </div>
    );
  }
}

export default FriendsList;