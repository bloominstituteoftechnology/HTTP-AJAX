import React from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom';
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
            (friend)=>{return <form onSubmit={props.submitUpdate}><div><input type="text" name="name" placeholder={friend.name}/> <input type="text" name="age" placeholder={friend.age}/> <input type="text" name="email" placeholder={friend.email}/> <button>Update</button>
            </div></form>}
          )}
    
    </FriendsListStyled>
    )
}

export default FriendsList;