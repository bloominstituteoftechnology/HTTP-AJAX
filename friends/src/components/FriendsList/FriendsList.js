import React, { Component } from "react";
import Friend from "../Friend/Friend";
import styled from 'styled-components';

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Cards>
        {this.props.list.map(friend => (
          <Friend
            name={friend.name}
            age={friend.age}
            email={friend.email}
            id={friend.id}
          />
        ))}
      </Cards>
    );
  }
}

export default FriendsList;
