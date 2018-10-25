import React, { Component } from 'react';
import axios from 'axios';

class FriendList extends Component {
  constructor () {
    super();
      this.state={
        friends:[]
      };
  }
  render() {
    return (
      <div>

        <ul>
          {this.state.friends.map((friend)=> {
            return(
              <li key={friend.id}>
              {friend.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
// Helpers
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response)=>{
      this.setState({friends: response.data})
    })
    .catch(()=>{
      console.error('error getting data') //use 'console.error' to show red icon and color in return
    })
  }
}
export default FriendList;
