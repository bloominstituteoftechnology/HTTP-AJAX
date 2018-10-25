import React from 'react';
import { Button } from 'reactstrap';
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px solid purple;
    padding: 20px;
    margin: 20px;
    border: 1px solid dodgerblue;
    width: 300px;
`;

const StyledCard = styled(Card)`
    
`;

const FriendCard = props => {
    const { name, age, email } = props.friend;
    return (
        <CardContainer>
            <StyledCard> 
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{age}</CardSubtitle>
                <CardText>{email}</CardText>
                <div>
                    <Button color="danger">Delete</Button> 
                    <Button color="secondary">Edit</Button>   
                </div>
            </StyledCard>
        </CardContainer>   
    );
};

export default FriendCard;