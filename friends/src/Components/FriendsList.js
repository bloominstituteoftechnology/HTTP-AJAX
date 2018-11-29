import React from 'react';
import FriendsForm from './FriendsForm';
import shortid from 'shortid';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 745px;
    padding-left: 0;
    li {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0;
        ul {
            background: #fff;
            width: 100%;
            display: flex;
            border: solid rgba(0, 0, 0, 0.1) 1px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);
            button {
                height: 100%;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                border: 0;
                background: red;
                }
            li {
                display: flex;
                width: calc(100% / 3);
                justify-content: flex-start;
                padding: 10px;
                border-radius: 0px;
                input {
                    &:disabled {
                        background: white;
                        border: none;
                        color: black;
                        font-size: 16px;
                    }
                }
            }
        }
    }
`;

const FriendsList = props => {
    return (
        <Div>
            <FriendsForm handleChange={props.handleChange} submit={props.submit} />
            <Ul>
                {props.friends.map(friend => (
                    <li key={shortid.generate()}>
                        <ul>
                            <li><input disabled placeholder={friend.name} /></li>
                            <li><input disabled placeholder={friend.age} /></li>
                            <li><input disabled placeholder={friend.email} /></li>
                            <button>Edit</button>
                        </ul>
                    </li>
                ))}
            </Ul>
        </Div>
    );
};

export default FriendsList;
