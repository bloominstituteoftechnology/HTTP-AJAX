import React from 'react';

const AddFriendForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit} className="friend-form">
            <input type="text" placeholder="Name" name="name"></input>
            <input type="number" placeholder="Age" name="age"></input>
            <input type="email" placeholder="Email" name="email"></input>
            <button>Submit!</button>
        </form>
     );
}
 
export default AddFriendForm;