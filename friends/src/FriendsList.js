import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      
    };
  };



  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>


  <form >
    <input type='text' onChange= '' placeholder='Enter name' value=''/> <br /><br />
    <input type='text' onChange= '' placeholder='Enter age' value=''/> <br /><br />
    <input type='text' onChange= '' placeholder='Enter email' value=''/><br /><br />

    <input type='submit' value='Submit'/>
    </form>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
        // console.log(response);
        this.setState({ friends: response.data });
      })
        
        .catch(error => {
          console.log(`There was an error getting friends:  ${error}`);
        });
  }


}

export default FriendsList;