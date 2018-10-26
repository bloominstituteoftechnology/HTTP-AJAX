import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    padding: 10px;
    margin: 10px;
    width: 300px;
`;

const StyledCard = styled(Card)`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
`;

const FriendCard = props => {
    const { id, name, age, email } = props.friend;
    return (
        <CardContainer>
            <StyledCard> 
            <StyledLink to={`/friends/${id}`}>
                <CardTitle>{name}</CardTitle>
            </StyledLink>
                <CardSubtitle>{age}</CardSubtitle>
                <CardText>{email}</CardText>
            </StyledCard>
        </CardContainer>   
    );
};

export default FriendCard;