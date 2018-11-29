import React, { Fragment } from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendsDiv = styled.div`
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
                    {(props.friends) && props.friends.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
                </FriendsDiv>
            </Fragment>
        );

}