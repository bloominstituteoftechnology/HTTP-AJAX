import React from 'react';

const FriendForm = props => {
    return (
    <div className="form">
         <form>
            <h4>Add more friends to your list:</h4>
            <input type="text" placeholder="First Name" name="fname" />
            <input type="text" placeholder="Age" name="age" />
            <input type="email" placeholder="Email Address" name="email" />
            <button type="submit">Add</button>
        </form>
    </div>
    )
}

export default FriendForm