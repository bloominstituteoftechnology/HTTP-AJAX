import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.div`
  background-color: #6B6E70;
  border: 1px solid #474B4F;
  border-radius: 5px;
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  background-color: #222629;
  color: #FFF;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: #86C232;
  color: #FFF;
  border: none;
  border-radius: 5px;
`;

const Friend = props => {

  const handleClick = e => {
    props.deleteFromServer(props.friend.id);
  };
  return (
    <FriendCard>
      <Name>
        {props.friend.name}
        <CloseButton onClick={handleClick}>X</CloseButton>
      </Name>
      <div>
        Age: {props.friend.age}
      </div>
      <div>
        Email: {props.friend.email}
      </div>
    </FriendCard>
  );
};

export default Friend;
