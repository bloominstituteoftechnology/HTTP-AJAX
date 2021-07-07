import React, { Component } from 'react';
import Styled from 'styled-components';

const InputSection = Styled.section`
    display: flex;
    color: black;
    font-size: 24px;
    justify-content: space-around;
    padding: 10px 20px;
`;

const Input = Styled.input`
    font-size: 20px;
    width: 250px;
`;

const Label = Styled.label`
    display: flex;
    color: black;
    font-size: 24px;
    justify-content: right;
    padding-right: 20px;
    width: 100%;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      type: '',
      name: '',
      value: ''
    }
  }
  componentDidMount() {
    this.setState({
      type: this.props.type,
      name: this.props.name
    })
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <InputSection>
        <Label htmlFor={this.state.name}>
          {this.state.name}:
        </Label>
        <Input type={this.state.type} name={this.state.name} value={this.state.value} onChange={this.onChange}/>
      </InputSection>
    );
  }
}
