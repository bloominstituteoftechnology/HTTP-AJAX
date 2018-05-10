import React, { Component } from 'react';

const FriendList = (props) => {
    return(
    props.friends.map((friendobj) => {
        return(
        <div key={ friendobj.id }>
            {friendobj.id}{friendobj.name}{friendobj.age}{friendobj.email}
        </div>

    )
    })

    )}
export default FriendList