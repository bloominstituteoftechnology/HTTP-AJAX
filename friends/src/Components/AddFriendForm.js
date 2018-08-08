import React from 'react';

const AddFriendForm = (props) => {
    return ( 
        <div className="friend-form-container">
            <h2> Add friend! </h2>
            <div className="friend-form">
                <form onSubmit={props.handleSubmit}>  
                    <input type="text" placeholder="Name" name="name" required></input>
                    <input type="number" placeholder="Age" name="age" required></input>
                    <input type="email" placeholder="Email" name="email" required></input>
                    <button>Submit!</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddFriendForm;