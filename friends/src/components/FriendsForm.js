import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FriendsForm = (props) => {

        return (
            <div>

        <Form
    onSubmit={props.addFriend}
    >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input onChange = {props.changeHandler} type="text" name="name" id="name" placeholder="Friend's Name" value={props.newFriends.name}/>
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input onChange = {props.changeHandler} type="text" name="age" id="age" placeholder="Friend's Age" value={props.newFriends.age}/>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange = {props.changeHandler} type="text" name="email" id="email" placeholder="Friend's Email" value={props.newFriends.email}/>
    </FormGroup>

    <Button onClick={props.addFriend}>Submit</Button>

    </Form>

            </div>
        )
    }

export default FriendsForm;