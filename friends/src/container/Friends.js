import React from 'react';
import axios from 'axios';

import Friend from '../component/Friend';
import { FriendsWrapper } from '../styles/friendStyles';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
     }
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
    .then (res => {
      this.setState({friends: res.data});
    })
    .catch (err => {
      console.log(err);
    })
  }

  render() { 
    return ( 
      <FriendsWrapper>
        {this.state.friends.map(friend => <Friend  key={friend.id} friend={friend} />)}
      </FriendsWrapper>
     );
  }
}
 
export default Friends;