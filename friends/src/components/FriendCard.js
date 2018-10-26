import React from 'react';
import { CardTitle, CardSubtitle, CardText } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
`;

const FriendCard = props => {
    const { id, name, age, email } = props.friend;
    return (
        <div>
            <StyledLink to={`/friends/${id}`}>
                <CardTitle>{name}</CardTitle>
            </StyledLink>
                <CardSubtitle>{age}</CardSubtitle>
                <CardText>{email}</CardText>         
        </div>
    );
};

export default FriendCard;