import React from 'react';
import FriendsForm from './FriendsForm';
import shortid from 'shortid';
import styled from 'styled-components';

const Ul = styled.ul`
    --mdc-elevation-baseline-color: black;
    --mdc-elevation-umbra-opacity: 0.2;
    --mdc-elevation-penumbra-opacity: 0.14;
    --mdc-elevation-ambient-opacity: 0.12;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: center;
        ul {
            background: #fff;
            min-width: 745px;
            width: 30%;
            display: flex;
            justify-content: space-between;
            border: solid rgba(0, 0, 0, 0.1) 1px;
            border-radius: 10px;
            margin: 10px 0;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);
            li {
                display: flex;
                width: calc(100% / 3);
                justify-content: flex-start;
                padding: 10px;
                border-radius: 0px;
            }
        }
    }
`;

const FriendsList = props => {
    return (
        <>
            <FriendsForm />
            <Ul>
                {props.friends.map(friend => (
                    <li key={shortid.generate()}>
                        <ul>
                            <li>{friend.name}</li>
                            <li>{friend.age}</li>
                            <li>{friend.email}</li>
                        </ul>
                    </li>
                ))}
            </Ul>
        </>
    );
};

export default FriendsList;
