import React from "react";
import styled from 'styled-components';
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


const FriendList = props => {
    const friends = props.friends;
   const friendArray = friends.map( (friend, key) => 
  <ul key={friend.id}>  <div className="friendContainer">{friend.name}</div> {friend.age} {friend.email} </ul>
  );
      return(
            <FriendListDiv>
                {friendArray}
            </FriendListDiv>
      );
}

export default FriendList;