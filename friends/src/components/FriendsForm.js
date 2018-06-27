import React, {Fragment} from 'react';

const FriendsForm = props => {
    return (
        <Fragment>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.friend}
                    placeholder="Add Friend"
                    onChange={props.handleChange}
                />
            </form>
        </Fragment>
    );
}

export default FriendsForm;