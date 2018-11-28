import React from 'react';


const saveFriend = () => {
        console.log('hello')
    }

const AddFriend = props => {
    
    return (
        <div className="friend-form">
            <form onSubmit={saveFriend()}>
                <input type="text" placeholder="Add a new friend" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;