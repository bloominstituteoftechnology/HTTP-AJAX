import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";

const Card = styled.div.attrs({
  className: "card"
})`
  margin: 1rem;
  border-radius: 5px;
`;
const UpdateBtn = styled.div.attrs({
  className: "button"
})`
  background: lightskyblue;
  color: white;
  &:hover {
    color: white;
    background: royalblue;
  }
`;

const DeleteBtn = styled.div.attrs({
  className: "button is-danger"
})`

`;
const Friend = props => {
  return (
    <Card>
      <div className="card-content">
        <h2 className="title is-6">{props.name}</h2>
        <p className="subtitle is-6">Email: {props.email}</p>
        <p className="subtitle is-6">Age: {props.age}</p>
        <UpdateBtn onClick = {props.showUpdateModalHandler}>Update?</UpdateBtn>
        <DeleteBtn onClick = {() => {
          props.deleteFriendHandler(props.id);
          }}>Delete!</DeleteBtn>
      </div>
    </Card>
  );
};

export default Friend;
