import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const FormComponent = props => {
  return (
    <Form
      className="mx-auto"
      onSubmit={props.submit}
      onChange={props.handleChange}
    >
      <FormGroup>
        <Label for="friendName">Name</Label>
        <Input
          type="text"
          name="name"
          id="friendName"
          placeholder="Type in your friend's name!"
          value={props.newFriend.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="friendAge">Age</Label>
        <Input
          type="text"
          name="age"
          id="friendAge"
          placeholder="Type in your friend's age!"
          value={props.newFriend.age}
          pattern="[0-9]+"
        />
      </FormGroup>
      <FormGroup>
        <Label for="friendEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="friendEmail"
          placeholder="Type in your friends e-mail!"
          value={props.newFriend.email}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormComponent;
