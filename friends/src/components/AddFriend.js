import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 40%;
    margin: auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: left;
    padding: 15px;
`

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledForm>
                <FormGroup>
                    <Label for="name" >Name</Label>
                    <Input onChange={this.props.handleChange} type="text" name="name" id="name" placeholder="...enter name" value={this.props.newFriend.name}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="age" >Age</Label>
                    <Input onChange={this.props.handleChange} id="age" type="number" name="age" placeholder="...enter age" value={this.props.newFriend.age}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email" >Email</Label>
                    <Input onChange={this.props.handleChange} id="email" type="email" name="email" placeholder="...enter email" value={this.props.newFriend.email}></Input>
                </FormGroup>
                <Button onClick={this.props.addFriendHandler}>Add Friend</Button>
            </StyledForm>
        )
    }
}

export default AddFriend;