import React from "react";
import { Link } from "react-router-dom";

export default props => {

    return (
        <div>

            <Link to={`/friends/${props.id}`}>
             {props.name}
            </Link>

        </div>
    );
};
