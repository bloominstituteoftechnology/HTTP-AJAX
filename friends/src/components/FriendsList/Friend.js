import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";

const Card = styled.div.attrs({
    className: 'card'
})`
margin: 1rem;
`;
const Friend = props => {
  return (
      <Card>
          <h2 className = "title is-6">{props.name}</h2>
          <p className = 'subtitle is-6'>Email: {props.email}</p>
          <p className = 'subtitle is-6'>Age: {props.age}</p>
    </Card>
  );
};

export default Friend;
