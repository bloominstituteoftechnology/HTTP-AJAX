import React, { Fragment } from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendsDiv = styled.div`
    background-color: #f6f2f6;
    width: 350px;
    padding: 1.6rem;
    border: 1px solid gray;
    border-radius: 4px;
    text-align: left;
    margin-top: 5rem;
    height: 650px;
    overflow-y: scroll;
`

export default function Friends(props) {

        return (
            <Fragment>
                <FriendsDiv>
                    {(props.friends) && props.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name} age={friend.age} email={friend.email} delete={props.delete} />)}
                </FriendsDiv>
            </Fragment>
        );

}