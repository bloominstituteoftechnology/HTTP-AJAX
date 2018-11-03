import React from 'react';
import styled from 'styled-components';
const FriendsListStyled=styled.div`
display:flex;
flex-direction:column;
width:40%;
height:20rem;
justify-content:space-between;
margin:auto;
`

const FriendsList=(props)=>{
    return(
        <FriendsListStyled>
        {props.friends.map(
            (friend)=>{return <div>name:{friend.name} age: {friend.age} email: {friend.email}
            </div>}
          )}
    
    </FriendsListStyled>
    )
}

export default FriendsList;