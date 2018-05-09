import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const NewFriendForm = () => {
  return (
    <div className="new-friend-form">
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>

      </Form>
    </div>
  );
}

export default NewFriendForm;
