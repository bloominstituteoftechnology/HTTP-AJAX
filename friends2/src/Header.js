import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {

    render() {
        return(
            <FriendHeader>
            <HeaderDiv>
                <p>Delete</p>
            </HeaderDiv>
            <HeaderDiv>
                <p>Name</p>
            </HeaderDiv>
            <HeaderDiv>
                <p>Age</p>
            </HeaderDiv>
            <HeaderDiv>
                <p>Email Address</p>
            </HeaderDiv>
        </FriendHeader>
        )
    }
};

export default Header;

const HeaderDiv = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    color: white;
`;

const FriendHeader = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    background-color: black;
`