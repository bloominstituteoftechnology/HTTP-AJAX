// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

const PostFriend = (props) => {
    return(
        <Fragment>
            <Link to = '/friendslist'>Go to friends list</Link>
            <Link to = '/'>Go home</Link>
            <form onSubmit = { props.handlePost }>
                <input name = 'friendName' type = 'text' placeholder = 'Enter name...' />
                <input name = 'friendAge' type = 'number' placeholder = 'Enter age...' />
                <input name = 'friendEmail' type = 'text' placeholder = 'Enter email...' />
                <input type = 'submit' value = 'submit' />
            </form>
        </Fragment>
    );
}

PostFriend.propTypes = {
    handleSubmit: PropTypes.func
}

export default PostFriend;
