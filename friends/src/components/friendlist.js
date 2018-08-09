import React from 'react';
import {
    Card,   CardBody,
  }from 'reactstrap';
  import styled from 'styled-components'

const Friendlist = props => {
  return(
  <Card className= "friendlist">
      {props.friends.map(friend =>(
        <div className = "individual" key= {friend.id}>
            <CardBody>{friend.name}  is {friend.age} years old and can be reached at {friend.email}</CardBody>
        </div>
      ))}
  </Card>
);
}

export default Friendlist;
