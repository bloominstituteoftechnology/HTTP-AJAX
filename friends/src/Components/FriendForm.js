import React from 'react';
import './Friend.css';

function FriendForm() {
    return (
        <div className="FriendFormDiv">
            <h1>Submit Application</h1>
            <form className="FriendForm" onSubmit={() => console.log('Submitting')} >
                <input placeholder=" Name.. "/>
                <input placeholder=" Age.. "/>
                <input placeholder=" Contact.. "/>
            </form>
        </div>

    )
}

export default FriendForm;