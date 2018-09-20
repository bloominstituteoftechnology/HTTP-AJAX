import React, { Fragment } from 'react';
import Friends from './Friends';
import FriendForm from './FriendForm';

function FrontPage(props) {
    return (
        <Fragment>
            <FriendForm 
            handleSubmit={props.handleSubmit} 
            handleChange={props.handleChange} 
            stateProps={props.stateProps} />
            <Friends 
            friendsData={props.stateProps.friendsData} />
        </Fragment>
    )
}

export default FrontPage;