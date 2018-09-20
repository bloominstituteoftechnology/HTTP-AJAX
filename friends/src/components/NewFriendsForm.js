import React from 'react';
import PropTypes from 'prop-types';

function NewFriendsForm(props) {
    return (
        <form>
            <input placeholder="add a friend..."type="text" required />
        </form>
    )
}

NewFriendsForm.PropTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.string
    })
}
export default NewFriendsForm;