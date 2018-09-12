import React from 'react';
import styled from 'styled-components';

const AddFriendForm = (props) => {
  return (
    <StyledForm>
      <input placeholder="First Name" />
      <input placeholder="Age" />
      <input placeholder="email" />
    </StyledForm>
  );
};

export default AddFriendForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 1%;
  width: 22%;
`;
