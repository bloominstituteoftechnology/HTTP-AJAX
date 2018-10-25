import React from 'react';
import { Form, Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    padding: 20px;
    margin: auto;
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:786px) {
        width: 400px;
    }

    @media (max-width:500px) {
        width: 350px;
    }
`;

const StyledButton = styled(Button)`
    width: 50%;
    margin: auto;
`;

const FriendForm = props => {
    return (
        <StyledForm onSubmit={props.handleSubmit}>
            <InputGroup>
                <Input type="text" name="name" onChange={props.handleTextInput} value={props.name} placeholder="Add name..." />
            </InputGroup>
            <br />
            <InputGroup>
                <Input type="text" name="age" onChange={props.handleTextInput} value={props.age} placeholder="Add age..." />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input type="text" name="email" onChange={props.handleTextInput} value={props.email} placeholder="Add email..." />
            </InputGroup>
            <br />
            <StyledButton color="success" type="submit">Add Friend!</StyledButton>
        </StyledForm>
    );
};

export default FriendForm;