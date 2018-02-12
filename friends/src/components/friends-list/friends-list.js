import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
`;

class FriendsList extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <StyledDiv>
        <h1>Friends</h1>
      </StyledDiv>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        const friends = res.data;
        this.setState({ friends: friends });
        console.log(this.state);
      })
      .catch(error => {
        alert('There was an error:', error);
      });
  }
}

  export default FriendsList;

  {/* <styledDiv>
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
</styledDiv> */}