import React from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`
  width: 650px;
  height: 45px;
  border: 1px solid #6B6E70;
  background-color: #61892F;
  border-radius: 5px;
  color: #000;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpdateMessage = props => {
  return(
    <MessageDiv>Addition Sucessful!</MessageDiv>
  );
};

export default UpdateMessage;
