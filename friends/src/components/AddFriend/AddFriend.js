
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

handleChangeName = event => {
  this.setState({ newName: event.target.value });
};

handleChangeAge = event => {
  this.setState({ newAge: event.target.value });
};

handleChangeEmail = event => {
  this.setState({ newEmail: event.target.value });

const AddFriend = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="Name">Name: </Label>
        <Input type="text" name="name" id="name" placeholder="Add name" autoComplete="name" onChange={handleChangeName} value={props.name} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age: </Label>
        <Input type="number" name="age" id="age" placeholder="Add age" onChange={handleChangeAge} value={props.age} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email: </Label>
        <Input type="email" name="email" id="email" placeholder="Add email" autoComplete="email" onChange={handleChangeEmail} value={props.email} />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Add Friend
      </Button>
    </Form>
  )
}

export default AddFriend;