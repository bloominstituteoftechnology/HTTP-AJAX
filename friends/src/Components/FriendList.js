import React from "react";
import styled from 'styled-components';
// import UpdateFriendComponent from './UpdateFriendComponent';
// import ReactDOM from "react-dom";
// import {Route, Link} from 'react-router-dom';

const FriendListDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: lavender;
width: 50opx;
margin: 15px auto;
padding: 5px;
border-radius: 20px;
`
const FriendContainer = styled.div`
display: flex;
flex-direction: row;
`

const FriendDiv = styled.div`
padding: 5px;
`

const DeleteFriend = styled.button`
border-radius: 10px;
font-size: 15px;
color: red;
`

const UpdateFriend = styled.button`
border-radius: 10px;
font-size: 15px;
`


const FriendList = props => {
    const friends = props.friends;
    // const deleteFriend = props.deleteFriend;
   const friendArray = friends.map( (friend, key) => 
  <ul key={friend.id}>  
    <FriendContainer>
    <UpdateFriend type="submit" onClick={props => props.updateFriend(friend.id)}>{friend.updateFriend} Update Friend </UpdateFriend>
        <FriendDiv>{friend.name} </FriendDiv>
        <FriendDiv>{friend.age} </FriendDiv>
        <FriendDiv>{friend.email} </FriendDiv>
        <DeleteFriend type="submit" onClick={() => props.deleteFriend(friend.id)}>{friend.deleteFriend} X </DeleteFriend>
    </FriendContainer> 

   </ul>
  );
      return(
            <FriendListDiv>
                {friendArray}
            </FriendListDiv>
      );
}

export default FriendList;

