import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Friend from "./Friend";

const FriendListContainer = styled.div`
  padding: 6rem 4rem;

  > a {
    text-decoration: none;
    color: black;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 200;
`;

const FriendList = props => {
  return (
    <FriendListContainer>
      <Header>Friend's List</Header>
      {props.friends.map(friend => (
        <Link to={`/friends/${friend.id}`} key={friend.id}>
          <Friend friend={friend} />
        </Link>
      ))}
    </FriendListContainer>
  );
};

export default FriendList;
