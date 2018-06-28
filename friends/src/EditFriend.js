import React from 'react';

const EditFriend = (props) => {

    return (
        <div>
             <form  onSubmit={props.submitEdits}>
                <input
                    type='text'
                    placeholder={props.friend.name}
                    onChange={props.editHandler}
                    value={props.stateProp.name}
                    name='name'
                />
                <input
                    type='number'
                    placeholder={props.friend.age}
                    onChange={props.editHandler}
                    name='age'
                    value={props.stateProp.age}
                />
                <input
                    type='text'
                    placeholder={props.friend.email}
                    onChange={props.editHandler}
                    name='email'
                    value={props.stateProp.email}
                />
                <button>Update {props.friend.name}</button>
            </form>
        </div>
    )
}
 
export default EditFriend;