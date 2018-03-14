import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const FormComponent = props => {
  return (
    <Row className="my-5">
      <Form
        className="mx-auto"
        onSubmit={props.submit}
        onChange={props.handleChange}
      >
        <FormGroup row>
          <Label for="friendName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="friendName"
              placeholder="Type in your friend's name!"
              value={props.newFriend.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="friendAge" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="age"
              id="friendAge"
              placeholder="Type in your friend's age!"
              value={props.newFriend.age}
              pattern="[0-9]+"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="friendEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="friendEmail"
              placeholder="Type in your friends e-mail!"
              value={props.newFriend.email}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3} className="mx-auto">
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Row>
  );
};

export default FormComponent;
