import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component{
  state = {
    friends: [],
  };

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        { this.state.friends.map(friend =>
          <div key={friend.id}>
            <div>Name: { friend.name }</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </div>
        )}
      </div>
    )
  }
}

export default FriendsList;
