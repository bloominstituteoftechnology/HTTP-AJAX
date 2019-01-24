import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';



const Header = styled.div`
background:#00274c;
  width: 30%;
  padding: 10px 2%;
  margin: 20px auto;
  `

const CardText = styled.div`
color:  #ffcb05;
letter-spacing: 1px;
font-size: .9rem;
font-weight: 400;
`
const H2 = styled.h2`
color:  #ffcb05;
letter-spacing: 1px;
font-size: 2rem;
font-weight: 500;
`

export const Friend = props => 

    <Header>
        <H2>{props.friend.name}</H2>
        <CardText>Age: {props.friend.age}</CardText>
        <CardText>Email: {props.friend.email}</CardText>
        <br></br>
        <Button outline color="danger" onClick={ () => props.handleEdit(props.friend.id) }>Edit</Button>
        <Button outline color="danger" onClick = { () => props.handleDelete(props.friend.id) }>Delete</Button>
    </Header>
    ;


