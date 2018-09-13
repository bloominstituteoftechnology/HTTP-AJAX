import React from "react";
import Friend from "./Friend";
import styled from 'styled-components'

const FriendsList = props => {
  return (
    <FriendsListContainer>
      {props.friends && props.friends.map(friend => <Friend friend={friend} deleteFriend={props.deleteFriend}/>)}
    </FriendsListContainer>
  );
};

export default FriendsList;

const FriendsListContainer = styled.div `
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
`
