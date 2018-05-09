import React from 'react';
import  { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewFriend = props => { 
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="email" id="name" placehlder="placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="email" id="name" placehlder="placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="email" id="name" placehlder="placeholder" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }

export default NewFriend;
