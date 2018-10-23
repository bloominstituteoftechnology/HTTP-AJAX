import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

import Input from './InputWithLabel';

const Form = Styled.form`
    background-color: rgb(44, 47, 43);
    height: 400px;
    position: sticky;
    top: 150px;
    width: 40%;
`;
const Title = Styled.h1`
    font-size: 36px;
`;
const Button = Styled.button`
    display: flex;
    color: black;
    font-size: 20px;
    justify-content: center;
    margin: 10px auto;
    width: 100px;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      formData: {},
      formError: ''
    }
  }
  createFriend = (e) => {
    e.preventDefault();
    const children = e.target.childNodes;
    let inputAreas = [];
    let inputs = [];

    // get the sections that the inputs are located in
    Array.from(children).filter(child => {

      return child.localName === 'section' ? inputAreas.push(child) : null;
    })
    // get the inputs themselves
    inputAreas.filter(nodes => {
      nodes = nodes.childNodes;
      return Array.from(nodes).filter(input => {
        const name = input.name;
        const value = input.value;
        return input.localName === 'input' ? inputs.push({name, value}) : null;
      })
    })
    console.log(inputs);
  }
  render() {
    return (
      <Form onSubmit={this.createFriend}>
        <Title>
          Add A Friend
        </Title>
        <Input type='text' name='name'/>
        <Input type='text' name='age'/>
        <Input type='text' name='email'/>
        <Button type='submit'>ADD</Button>
        <p>{this.state.formError}</p>
      </Form>
    );
  }
}
