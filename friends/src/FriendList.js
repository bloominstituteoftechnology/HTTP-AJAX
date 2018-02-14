import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
    margin: 1rem;
    padding: 1rem;
    min-width: 15rem;
`

function FriendList(props) {
    return (
        <ul>
        {props.friends.map(friend => {
          return (
            <Wrapper key={friend.id}>
                <li>
                {friend.name}
                </li>
                <li>
                    {friend.age}
                </li>
                <li>
                    {friend.email}
                </li>
                <button
                    onClick={() => {
                    props.onDelete(friend.id);
                    }}>
                    Delete
                </button>
            </Wrapper>
          );
        })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

FriendList.defaultProps = {
    friends: [],
};

export default FriendList;

