import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledForm = styled(Form)`
    width: 40%;
    margin: auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: left;
    padding: 15px;
`

const StyleButton = styled(Button)`
    width: 100px;
`

const ButtonGroup = styled(FormGroup)`
    display:flex;
    justify-content: space-around;
`
const AddFriend = (props) => {
    return (
        <StyledForm>
            <FormGroup>
                <Label for="name" >Name</Label>
                <Input onChange={props.handleChange} type="text" name="name" id="name" placeholder="...enter name" value={props.newFriend.name}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="age" >Age</Label>
                <Input onChange={props.handleChange} id="age" type="number" name="age" placeholder="...enter age" value={props.newFriend.age}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="email" >Email</Label>
                <Input onChange={props.handleChange} id="email" type="email" name="email" placeholder="...enter email" value={props.newFriend.email}></Input>
            </FormGroup>
            <ButtonGroup>
                <StyleButton color="primary" onClick={props.addFriendHandler}>Add Friend</StyleButton>
                <Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><StyleButton>Go Back</StyleButton></Link>
            </ButtonGroup>
        </StyledForm>
    )
}

export default AddFriend;