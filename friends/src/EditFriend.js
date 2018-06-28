import React from 'react';
import { Link } from 'react-router-dom';

const EditFriend = (props) => {

    return (
        <div className='editInput'>
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
                <button className='editInput'>Update {props.friend.name}</button>
                
            </form>
            {/* <Link to='/'><button>Cancel</button></Link> //needs to be working */}
            {/* <button onClick={props.goHome}>Cancel</button> */}
        </div>
    )
}
 
export default EditFriend;