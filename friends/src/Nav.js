import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    &:hover {
        font-weight: bold;
    }
`

export default function Nav() {
    return (
        <NavDiv>
            <Link to="/"><Span>Home</Span></Link>
            <Link to="/add"><Span>Add Friend</Span></Link>
            <Link to="/friends"><Span>Friends</Span></Link>
        </NavDiv>
    );
}