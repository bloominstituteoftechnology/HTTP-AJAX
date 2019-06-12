import React from 'react';
import { Form, FormGroup, Label, Input, Button} from "reactstrap";

const BecomeFriendForm = props => (
      <Form className="form-container">
        <FormGroup className="form-wrapper">
          <Label>Name:</Label>
          <Input type="text" name="name" placeholder="Hello, your name is:" />
          <Label>Age: </Label>
          <Input type="text" name="age" placeholder="How old are you?" />
          <Label>E-Mail: </Label>
          <Input type="email" name="email" placeholder="What is your email?" />
          <Button>Become Friends!</Button>
        </FormGroup>
      </Form>
    );

export default BecomeFriendForm;