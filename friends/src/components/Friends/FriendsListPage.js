import React from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList';
import styled from 'styled-components';

const FriendsListPageDivElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px 30px;
`;

const HeaderElement = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
  margin: 0 0 30px 0;
  background-color: #fff;
`;

const HeaderContentElement = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 850px;
  width: 100%;
  & > a {
    align-self: flex-end;
  }
`;

const H1Element = styled.h1`
  margin: 0 0 10px;
  flex: 1;
  font-color: #151b26;
  font-size: 2.4rem;
`;

const ButtonElement = styled.button`
  background-color: #26abf2;
  border: 0;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: #178ee0;
    border: 0;
  }
`;

const FriendsListPage = props => {
  return(
    <FriendsListPageDivElement>
      <HeaderElement>
        <HeaderContentElement>
          <H1Element>Friends</H1Element>
          <Link to="/add">
            <ButtonElement>Add Friend</ButtonElement>
          </Link>
        </HeaderContentElement>
      </HeaderElement>
      <FriendsList friends={props.friends} onDeleteFriend={props.onDeleteFriend} /> 
    </FriendsListPageDivElement>
  )
}

export default FriendsListPage;
