import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import App from '../App';
import { Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export const FriendForm = ( {name, age, email, id, handleChange, addFriend, handleSubmit} ) => {
    return(
        <div>
            <Card className="col-md-4 m-5">
                <Form action="/friends" method="POST" value={id}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" value={email} id="exampleEmail" onChange={handleChange} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name" value={name} id="exampleName" onChange={handleChange} placeholder="whats ur name boi" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Age">Age</Label>
                        <Input type="age" name="age" value={age} id="exampleAge" onChange={handleChange} placeholder="how old are you?" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="id">ID</Label>
                      <Input type="number" name="id" value={id} onChange={handleChange} placeholder="Enter ID"/>
                   </FormGroup>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}