import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NewFriendForm.css';


const NewFriendForm = (props) => {
  return (
    <div className="new-friend-form">
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input name="name" onChange={props.onForm} placeholder="Name" value={props.nameValue} />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input name="age" onChange={props.onForm} placeholder="Age" value={props.ageValue} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" onChange={props.onForm} placeholder="Email" value={props.emailValue} />
        </FormGroup>
        <Link to="/"><Button >Back</Button></Link>
        <Link to="/"><Button onClick={props.onButton} >Submit</Button></Link>

      </Form>


    </div>
  );
}

export default NewFriendForm;
