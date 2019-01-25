import React from 'react';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FriendContainer = styled.div `
  width: 22%;
  border: 1px solid black;
  padding: 10px 0;
  margin: 10px 1%

  a {
    text-decoration: none;
    color: black;
  }
`

const ListContainer = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 20px 0;
`

const FriendsList = props => {
  return (
    <div>
      <FriendForm create createFriend={props.createFriend} />
      <ListContainer>
        {props.friends.map(friend => (
          <FriendContainer key={friend.id}>
            <Link to={`/friends/${friend.id}`}>
              <FriendCard friend={friend} deleteFriend={props.deleteFriend} />
            </Link>
            <button onClick={() => props.deleteFriend(friend.id)}>Delete</button>
          </FriendContainer>
        ))}
      </ListContainer>
    </div>
  )
}

export default FriendsList;