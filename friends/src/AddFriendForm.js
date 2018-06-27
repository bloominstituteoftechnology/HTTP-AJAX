import React from 'react';
import styled from 'styled-components';
/* prettier-ignore */
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const StyledForm = styled(Form)`
  width: 300px;
  margin-left: 40%;
`;

export default class AddFriendForm extends React.Component {
  render() {
    return (
      <StyledForm>
        <FormGroup row>
          <Label for="Name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input type="name" name="name" placeholder="enter name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Age" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input type="age" name="age" placeholder="enter age" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="enter email"
            />
          </Col>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </StyledForm>
    );
  }
}
