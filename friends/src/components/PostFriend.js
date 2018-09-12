// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

const PostFriend = (props) => {
    return(
        <form onSubmit = { props.handleSubmit }>
            <input name = 'friendName' type = 'text' placeholder = 'Enter name...' />
            <input name = 'friendAge' type = 'number' placeholder = 'Enter age...' />
            <input name = 'friendEmail' type = 'text' placeholder = 'Enter email...' />
            <input type = 'submit' value = 'submit' />
        </form>
    );
}

PostFriend.propTypes = {
    handleSubmit: PropTypes.func
}

export default PostFriend;
