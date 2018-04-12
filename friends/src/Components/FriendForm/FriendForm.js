import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './FriendForm.css';

const FriendForm = props => {
    console.log(props);
    return ( 
        <Form onSubmit={props.addFriend} className="friendForm" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name:</Label>
                <Input type="text" id="name" onChange={props.handleNewFriend} placeholder="name" name="name" value={props.state.name} required />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="age" className="mr-sm-2">Age:</Label> 
                <Input type="number" id="age" onChange={props.handleNewFriend} placeholder="age" name="age" value={props.state.age} required />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="email" className="mr-sm-2">Email:</Label>
                <Input type="email" id="email" onChange={props.handleNewFriend} placeholder="email" name="email" value={props.state.email} required />
            </FormGroup>
        <Button>Add New Friend</Button>
      </Form>
    );
}

export default FriendForm;