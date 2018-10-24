import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.div`
    width: 60%;
    margin: 10px auto;
    background-color: lightgrey;
    border: 1px solid black;
    box-shadow: 3px 3px 6px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const List = (props) => {
    return (
      <div>
        {props.friends.map(friend => <FriendCard>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            </FriendCard>)}
      </div>
    )
}

export default List;