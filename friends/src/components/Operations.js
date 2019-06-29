import React from "react";
import { Link } from "react-router-dom";

function Operations() {
  return (
    <div className="operations-content">
      <Link className="app-button" to="/displayPanel/add">
        Add
      </Link>
      <Link className="app-button" to="/displayPanel/mod">
        Modify
      </Link>
      <Link className="app-button" to="/displayPanel/del">
        Remove
      </Link>
    </div>
  );
}
export default Operations;