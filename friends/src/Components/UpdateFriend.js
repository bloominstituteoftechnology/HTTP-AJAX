import React from 'react';

const UpdateFriend = (props) => {
    return ( 
        <div className="update-friend">
            <div className="friend-form-container">
                <h2> Update friend! </h2>
                <div className="friend-form">
                    <form onSubmit={props.handleUpdate}>
                        <input type="text" placeholder="Name" name="name" required></input>
                        <input type="number" placeholder="Age" name="age" required></input>
                        <input type="email" placeholder="Email" name="email" required></input>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UpdateFriend;