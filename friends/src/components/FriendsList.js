import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendsList extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
    }
  }
 
  
  render() {
    return (
      <div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name border-bottom">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
        
        <div>
        <div>Add a New Friend:</div>
        <form onSubmit={this.addFriend}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
        
      </div>
    );
  }
  componentDidMount() { 
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => console.log(error))
   }
}

export default FriendsList;
