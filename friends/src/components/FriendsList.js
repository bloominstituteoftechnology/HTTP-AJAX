import React from 'react';
import uuidv1 from 'uuid/v1';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Friend from './Friend';

const StyledFriendsList = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`

export default ({ friends, isLoading, deleteFriend }) => {
  if (friends[0]) return (
     <>
      <h1>My Favorite Friends</h1>
      {isLoading && (<p>...Loading</p>)}  
      <StyledFriendsList>
        {friends.map(friend => 
          <Friend 
            key={uuidv1()} 
            friend={friend}
            deleteFriend={deleteFriend}
          />)}
      </StyledFriendsList>
      </>
    )
  return (
    <>
      <h1>No friends added yet, {<Link to='/add-friend'>Click Here</Link>} to add new friend</h1>
    </>
  )
}
