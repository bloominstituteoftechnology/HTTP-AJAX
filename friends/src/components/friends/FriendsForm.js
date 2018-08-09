import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FriendsForm = props => {

    return (
      <Form onSubmit={props.addNewFriend}>
        <FormGroup>

          <Label for="name">New Friend</Label>
          
          <Input 
          type="text" 
          name="name" 
          onChange={props.inputHandler}
          value={props.name}
          placeholder="name" />

           <Input 
          type="number" 
          name="age" 
          onChange={props.inputHandler}
          value={props.age}
          placeholder="age" />

           <Input 
          type="email" 
          name="email" 
          onChange={props.inputHandler}
          value={props.email}
          placeholder="email" />

        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }

  export default FriendsForm