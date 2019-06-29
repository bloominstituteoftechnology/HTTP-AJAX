import React from "react";
import { Link } from "react-router-dom";

function Operations() {
  return (
    <div className="operations-content">
      <Link className="app-button" to="/displayPanel">
        Add
      </Link>
      <div className="app-button">Modify</div>
      <div className="app-button">Remove</div>
    </div>
  );
}
export default Operations;