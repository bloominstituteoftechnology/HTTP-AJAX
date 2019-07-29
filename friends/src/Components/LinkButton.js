import React from "react";
import { withRouter } from "react-router-dom";

const LinkButton = props => {
  const clickHandler = e => {
    e.preventDefault();
    props.history.push(props.to);
  };
  return <button onClick={clickHandler}>{props.children}</button>;
};

export default withRouter(LinkButton);
