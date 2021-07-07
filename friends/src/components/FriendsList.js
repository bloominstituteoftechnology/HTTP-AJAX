import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import FriendCard from './FriendCard';

const FriendsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    a{
        cursor: default;
        text-decoration: none;
        color: black;
    }
`;

const FriendsList = (props) =>{
    return (
        <FriendsListContainer>
            {props.friends.map(friend=>{
                return (
                    <Link key={friend.id} to={`/${friend.id}`}><FriendCard friend={friend} pointer/></Link>
                )
            })}
        </FriendsListContainer>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string
        })
    )
}

export default FriendsList;