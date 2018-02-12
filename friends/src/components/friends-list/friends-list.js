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
        {this.state.friends.map(val => {
          return (
            <ul>
              <li>{val.name}</li>
              <li>{val.age}</li>
              <li>{val.email}</li>
            </ul>
          )
        })}
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
  