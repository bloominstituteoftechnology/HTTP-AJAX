import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = props => {
  return (
    <Fragment>
      <div>[LANDING PAGE]</div>
      <Link to="/friends">FRIENDS</Link>
    </Fragment>
  );
};

export default LandingPage;
