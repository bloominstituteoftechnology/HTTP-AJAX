import React from 'react';
import styled from 'styled-components';

const AddFriendForm = (props) => {
  return (
    <StyledForm>
      <NameInput placeholder="First Name" />
      <StyledInput placeholder="Age" />
      <StyledInput placeholder="email" />
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

const StyledInput = styled.input`
  margin-bottom: 9px;
  width: 50%;
  padding-left: 2%;
  font-size: 0.8rem;
`;

const NameInput = styled(StyledInput)`
  font-size: 1.6rem;
`;
