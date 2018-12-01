import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FriendCard = styled.div`
    color: #5a5260;
    border: none;
    border-radius: 8px;
    background-color: #ebe1f4;
    margin-bottom: 2.4rem;
    padding: 35px;
    line-height: 2.4rem;
`

const Btn = styled.button`
    margin-top: 1.5rem;
    margin-right: 1rem;
    padding: .5rem .1rem;
    width: 100px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
    &:focus {
        outline: none;
    }
`

export default function Friend(props) {
    return(
        <FriendCard className="friendcard">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
            <Link to={`/update/${props.id}`}><Btn>Update</Btn></Link>
            <Btn onClick={() => props.delete(props.id)}>Delete</Btn>
        </FriendCard>
    );
}