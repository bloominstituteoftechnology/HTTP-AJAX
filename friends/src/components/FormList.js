import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function FormList(props) {
  return (
    <div>
      <h2>Add A Friend:</h2>
      <StyledForm>
        <input placeholder="Friends Name" />
        <input placeholder="Friends Age" />
        <input placeholder="Friends Email" />
      </StyledForm>
    </div>
  );
}

export default FormList;
