import React from 'react';


const EditFriend = props => {
    return (<input placeholder={props.friend.name} type="text" onChange={props.editFriend} />
    );
};

export default EditFriend;