import React from 'react';
//import axios from 'axios';
import FriendForm from './friend-form.js';

function FriendAdder(props) {
    let content;
    if(props.showForm){
        content = <FriendForm onSubmit={props.onSubmit} />
    } else{
        content = <div
            className="add-card_show"
            onClick={props.onClick}
            children="+"
        />;
    }
    return (
        <div className="card add-card">
            {content}
        </div>
    );
}

export default FriendAdder;
