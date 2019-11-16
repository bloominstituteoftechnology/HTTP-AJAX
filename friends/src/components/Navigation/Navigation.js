import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <Link className="brand-logo" to="/">
          NewMyspace
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/friends" className="nav-link">
              Friends
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
