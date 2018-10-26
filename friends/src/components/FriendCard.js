import React from 'react';
import { Button } from 'reactstrap';
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

const ButtonContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
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
                <ButtonContainer>
                    <Button color="danger" onClick={props.handleDelete(id)}>Delete</Button> 
                    <Button color="secondary">Edit</Button>   
                </ButtonContainer>
            </StyledCard>
        </CardContainer>   
    );
};

export default FriendCard;