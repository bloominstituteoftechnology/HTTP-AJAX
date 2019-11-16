import React from 'react';
import { Form, Button, Row } from 'reactstrap';

export default function FriendForm(props) {
  return (
    <Form onSubmit={props.handleFriendForm}>
      <Row>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
          value={props.nameInput}
          onChange={props.handleInput}
        />
      </Row>
      <Row>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter age..."
          value={props.ageInput}
          onChange={props.handleInput}
        />
      </Row>
      <Row>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email..."
          value={props.emailInput}
          onChange={props.handleInput}
        />
      </Row>
      <Row>
        <Button type="submit" id="newFriendSubmit">
          Submit
        </Button>
      </Row>
    </Form>
  );
}
