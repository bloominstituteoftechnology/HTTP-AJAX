import React from 'react';
import { Friend } from "./Friend"
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `



export const FriendsList = props => 
   
    <Header>
        {props.friends.map((friend) => 
            <Friend
                friend={friend}
                key={friend.id}
                handleClick = {props.handleClick}
            />
        )}
    </Header>
 ;
