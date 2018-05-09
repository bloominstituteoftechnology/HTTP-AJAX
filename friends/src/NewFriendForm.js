import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './NewFriendForm.css';


const NewFriendForm = () => {
  return (
    <div className="new-friend-form">
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input  placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input placeholder="Age" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="Email" />
        </FormGroup>
        <Button>Submit</Button>

      </Form>
    </div>
  );
}

export default NewFriendForm;
