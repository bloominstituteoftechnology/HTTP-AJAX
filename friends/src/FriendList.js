import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`

const ListItem = styled.li`
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
    margin: 1rem;
    padding: 1rem;
    min-width: 15rem;
`

function FriendList(props) {
    return (
        <Wrapper>
        {props.friends.map(friend => {
          return (
            <div key={friend.id}>
                <ListItem>
                {friend.name}
                </ListItem>
                <ListItem>
                    {friend.age}
                </ListItem>
                <ListItem>
                    {friend.email}
                </ListItem>
                <button
                    onClick={() => {
                    props.onDelete(friend.id);
                    }}>
                    Delete
                </button>
            </div>
          );
        })}
        </Wrapper>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

FriendList.defaultProps = {
    friends: [],
};

export default FriendList;

