import React, { Fragment } from 'react';
import Friends from './Friends';
import FriendForm from './FriendForm';

function FrontPage(props) {
    return (
        <React.Fragment>
            <FriendForm 
            handleSubmit={props.handleSubmit} 
            handleChange={props.handleChange} 
            stateProps={props.stateProps} />
            <Friends 
            friendsData={props.stateProps.friendsData} />
        </React.Fragment>
    )
}

export default FrontPage;