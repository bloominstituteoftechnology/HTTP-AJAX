import React, { Component } from "react";
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;

`

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <h1>{this.props.name}</h1>
        <p>{this.props.age} years old</p>
        <p>{this.props.email}</p>
      </Card>
    );
  }
}

export default Friend;
