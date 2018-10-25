import React from 'react';
import styled from 'styled-components';


const FriendContainer = styled.div`
    width: 80%;
    height: 80vh;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    flex-wrap: wrap;
`


const FriendCard = styled.div`
    width: 25%;
    margin: 10px auto;
    background-color: lightgrey;
    border: 1px solid black;
    box-shadow: 3px 3px 6px grey;
    text-align: center;
`

const Close = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    margin: 5px;
    cursor: pointer;
`


const List = (props) => {
    return (
      <FriendContainer>
          
        {props.friends.map(friend => <FriendCard>
            <Close onClick={props.delete(friend.id)}>X</Close>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            </FriendCard>)}
      </FriendContainer>
    )
}

export default List;