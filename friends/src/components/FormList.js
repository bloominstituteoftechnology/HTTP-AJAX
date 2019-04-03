import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const StyledInput = styled.input`
  margin-top: 20px;
`;

function FormList(props) {
  return (
    <div>
      <h2>Add A Friend:</h2>
      <StyledForm>
        <StyledInput placeholder="Friends Name" />
        <StyledInput placeholder="Friends Age" />
        <StyledInput placeholder="Friends Email" />
      </StyledForm>
    </div>
  );
}

export default FormList;
