import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";

const FormSection = styled.section.attrs({
  className: "section"
})``;

const Container = styled.div.attrs({
  className: "container"
})`
  max-width: 400px;
`;

const Field = styled.div.attrs({
  className: "field"
})``;

const Control = styled.div.attrs({
  className: "control"
})``;

const ModalFooter = styled.div.attrs({
  className: "modal-card-foot"
})`

display: flex;
justify-content: space-between;
}
`;

const UpdateModal = props => {
  return (
    <div className={`modal ${props.updateModalShown ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Update Your Friend!</p>
        </header>

        <section className="modal-card-body">
          <FormSection>
            <Container>
              {/* Name */}
              <Field>
                <label className="label">Name</label>
                <Control>
                  <input
                    className="input"
                    type="text"
                    placeholder="Change your friend's name..."
                    name="updateName"
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
                    placeholder="How old is friend now?"
                    name="updateAge"
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
                    placeholder="Your friend changed their email because of you..."
                    name="updateEmail"
                    id="email"
                    onChange={props.changeInfoHandler}
                  />
                </Control>
              </Field>
            </Container>
          </FormSection>
        </section>
        <ModalFooter>
          <button className="button is-success" onClick = {() =>{
            props.updateFriendHandler(props.updateID);
            props.cancelUpdateHandler();
            }}>Save changes</button>
          <button className="button" onClick ={props.cancelUpdateHandler}>Cancel</button>
        </ModalFooter>
      </div>
    </div>
  );
};

export default UpdateModal;
