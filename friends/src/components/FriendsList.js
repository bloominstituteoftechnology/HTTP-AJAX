import React from 'react';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const FriendsCardWrapper = styled.div`
  border: 1px solid white;
  margin: 3px;
  padding: 30px 20px;
  font-size: 17px;
`;
const DeleteBtn = styled.button`
  width: 50px;
  margin: 5%;
  background-color: #9f001e;
  border-color: #9f001e;
`;

function FriendsList(props) {
  return (
    <div>
      <FriendsWrapper>
        {props.friends.map(friend => {
          return (
            <FriendsCardWrapper key={friend.id}>
              <h2>{friend.name}</h2>
              <p>{friend.age}</p>
              <code>{friend.email}</code>
              <br />{' '}
              <DeleteBtn onClick={() => props.deleteFriend(friend.id)}>
                X
              </DeleteBtn>
            </FriendsCardWrapper>
          );
        })}
      </FriendsWrapper>
    </div>
  );
}
export default FriendsList;
