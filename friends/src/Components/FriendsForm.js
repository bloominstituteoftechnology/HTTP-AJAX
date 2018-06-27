import React from 'react';



const FriendsForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                type= 'text'
                placeholder={props.placeholder}
                onChange={props.handleNameChange}
                value={props.name}
            />

        </form>
    )
}
 
export default FriendsForm;