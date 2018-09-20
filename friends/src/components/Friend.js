import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 4px;
  width: 100%;
  height: 100%;
`;

const Friend = props => {
  return (
    <Wrapper>
      <div>
        <div>Name: {props.friend.name}</div>
        <div>Age: {props.friend.age}</div>
        <div>Email: {props.friend.email}</div>
      </div>
    </Wrapper>
  );
};

export default Friend;
