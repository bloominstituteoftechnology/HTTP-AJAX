import React from 'react';
import './Friend.css';

function FriendForm(props) {
    return (
        <div className="FriendFormDiv">
            <h1>Submit Application</h1>
            <form className="FriendForm" onSubmit={() => console.log('submitting')} >
                <input onChange={props.handleChange} placeholder=" Name.. " name="name" />
                <input onChange={props.handleChange} placeholder=" Age.. " name="age"/>
                <input onChange={props.handleChange} placeholder=" Contact.. " name="email"/>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default FriendForm;