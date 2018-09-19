import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function UserForm() {
  return (
    <div>
      <Button color="primary">primary</Button>{" "}
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="enter name here"
          />
          <Label for="exampleAge">Age</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="enter age here"
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default UserForm;
