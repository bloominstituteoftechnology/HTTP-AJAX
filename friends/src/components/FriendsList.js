import React from "react";
import styled from 'styled-components'

const Person = styled.div`
    margin: 72px 0;
`

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(personOb => (
        <Person key={personOb.id}>
          <h2>{personOb.name}</h2>
          <h3>Age: {personOb.age}</h3>
          <h4>Email: {personOb.email}</h4>
        </Person>
      ))}
    </div>
  );
};

export default FriendsList;
