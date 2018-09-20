import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding-bottom: 20px;
`;

const UserForm = props => {
  return (
    <Wrapper>
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="enter name here"
              onChange={props.handleChange}
              required
              value={props.friend.name}
            />
            <Label for="exampleAge">Age</Label>
            <Input
              type="text"
              name="age"
              placeholder="enter age here"
              onChange={props.handleChange}
              required
              value={props.friend.age}
            />
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="enter email here"
              onChange={props.handleChange}
              required
              value={props.friend.email}
            />
          </FormGroup>
        </Form>
        <Button color="primary" onClick={props.handleFriendSubmit}>
          Submit
        </Button>
      </div>
    </Wrapper>
  );
};

export default UserForm;
