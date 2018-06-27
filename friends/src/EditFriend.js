import React from 'react';

const EditFriend = (props) => {
    return (
        <div>
             <form>
                <input
                    type='text'
                    placeholder={props.friend.name}
                    onChange={props.editHandler}
                    value={props.stateProp.name}
                    name='name'
                />
                <input
                    type='number'
                    placeholder='Age...'
                    onChange={props.editHandler}
                    name='age'
                    value={props.stateProp.age}
                />
                <input
                    type='text'
                    placeholder='Email...'
                    onChange={props.editHandler}
                    name='email'
                    value={props.stateProp.email}
                />
                <button onClick={this.submitEdits}>Update {props.friend.name}</button>
            </form>
        </div>
    )
}
 
export default EditFriend;