import React from 'react';
import './Friend.css';

function FriendForm(props) {
    return (
        <div className="FriendFormDiv">
            <h1>Submit Application</h1>
            <form className="FriendForm" onSubmit={props.handleSubmit} >
                <input onChange={props.handleChange} type="text" placeholder=" Name.. " name="name" />
                <input onChange={props.handleChange} type="number" placeholder=" Age.. " name="age"/>
                <input onChange={props.handleChange} type="text" placeholder=" Contact.. " name="email"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;