import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FrdFrm = (props) => {
  return (
    <div>
      <Form>
          <FormGroup>
            <Label for="exampleEmail">Name: </Label>
            <Input type="text" name={props.iptone} placeholder="Enter name" value={props.iptonvl} onChange={props.hdlChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Age: </Label>
            <Input type="number" name={props.ipttwo} placeholder="Enter age" value={props.ipttwvl} onChange={props.hdlChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email: </Label>
            <Input type="email" name={props.iptthr} placeholder="Enter email" value={props.iptthvl} onChange={props.hdlChange} />
          </FormGroup>
        </Form>
        <Button onClick={props.btnSbmt}>Add</Button>
    </div>
  )
}

export default FrdFrm;
