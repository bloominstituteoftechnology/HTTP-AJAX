import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const FriendForm = () => {
    return (  
        <div> 
            <Form>
                <FormGroup>
                <Label for="name">name</Label>
                <Input type="name" name="name" value={this.state.name} onChange={this.handleChange} id="name" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="email">email</Label>
                <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="email" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="age">age</Label>
                <Input type="age" name="age" value={this.state.age} onChange={this.handleChange} id="age" placeholder="with a placeholder" />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

