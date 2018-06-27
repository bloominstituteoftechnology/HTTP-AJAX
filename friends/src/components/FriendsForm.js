import React, {Fragment} from 'react';

const FriendsForm = props => {
    return (
        <Fragment>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.friendName}
                    name="name"
                    placeholder="First Name"
                    onChange={props.handleNameChange}
                    required
                />
            </form>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.friendAge}
                    name="age"
                    placeholder="Age"
                    onChange={props.handleAgeChange}
                    
                />
            </form>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.friendEmail}
                    name="email"
                    placeholder="Email"
                    onChange={props.handleEmailChange}
                    required
                />
            </form>
        </Fragment>
    );
}

export default FriendsForm;