import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Border = Styled.div`
border: 2px solid darkgray;
height: 100px;
width: 300px;
`;

const Name = Styled.h1`
font-size: 18px;
font-weight: bold;
`;

const Data = Styled.h1`
font-size: 15px;
font-style: italic;
`;

const FriendCard = props => {
    return (
        <Border>
            <Name>{props.name}</Name>
            <Data>{props.age}</Data>
            <Data>{props.email}</Data>
        </Border>
    );
}

FriendCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendCard;