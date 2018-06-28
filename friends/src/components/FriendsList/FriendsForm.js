import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
const FormSection = styled.section.attrs({
  className: "section"
})``;
const Container = styled.div.attrs({
  className: "container"
})``;
const Field = styled.div.attrs({
  className: "field"
})``;
const Control = styled.div.attrs({
  className: "control"
})``;

const SubmitBtn = styled.button.attrs({
  className: "button is-info"
})``;
const FriendsForm = props => {
  return (
    <FormSection>
      <Container>
        {/* Name */}
        <Field>
          <label className="label">Name</label>
          <Control>
            <input
              className="input"
              type="text"
              placeholder="What is your friend's name?"
              name="name"
              id="name"
              onChange={props.changeInfoHandler}
            />
          </Control>
        </Field>
        {/* Age */}
        <Field>
          <label className="label">Age</label>
          <Control>
            <input
              className="input"
              type="text"
              placeholder="How old is your friend?"
              name="age"
              id="age"
              onChange={props.changeInfoHandler}
            />
          </Control>
        </Field>
        {/* Email */}
        <Field>
          <label className="label">Email</label>
          <Control>
            <input
              className="input"
              type="text"
              placeholder="Friend's email that you can spam?"
              name="email"
              id="email"
              onChange={props.changeInfoHandler}
            />
          </Control>
        </Field>
        <SubmitBtn onClick={props.addFriendHandler}>Submit</SubmitBtn>
      </Container>
    </FormSection>
  );
};

export default FriendsForm;
