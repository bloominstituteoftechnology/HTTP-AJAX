import React from 'react';
import styled from 'styled-components';

const AddFriendForm = (props) => {
  console.log(props);
  return (
    <StyledForm onSubmit={props.addFriend}>
      <NameInput
        placeholder="First Name"
        value={props.inputName}
        name="inputName"
        onChange={props.handleInput}
        type="text"
      />
      <StyledInput
        placeholder="Age"
        value={props.inputAge}
        name="inputAge"
        onChange={props.handleInput}
        type="number"
      />
      <StyledInput
        placeholder="email"
        value={props.inputEmail}
        name="inputEmail"
        onChange={props.handleInput}
        type="email"
      />
      <StyledInput type="submit" />
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
