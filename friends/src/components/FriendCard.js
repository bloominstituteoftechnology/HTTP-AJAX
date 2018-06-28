import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled(Form)`
    width: 40%;
    margin: auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: left;
    padding: 15px;
    margin: 20px auto;
`

const FriendCard = props => {
    return (
        <StyledForm>
            <Link to={`/friends/${props.friend.id}`} style={{'color': 'black'}}>
                <FormGroup>
                    <Label>Name: {props.friend.name}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Age: {props.friend.age}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Email: {props.friend.email}</Label>
                </FormGroup>
            </Link>
        </StyledForm>
    )
}

export default FriendCard;