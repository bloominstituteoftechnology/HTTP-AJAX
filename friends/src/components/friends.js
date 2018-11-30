import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function friends(props){

    return (
    <div>        
        <div className='addFriend-btn-container'>
            <NavLink to='/friends/addFriend' className='normal' activeClassName='active' ><button onClick={() => props.addBtnClear()}>Add New Friend</button></NavLink>
        </div>
        <h2>Current Friend List of {props.info.data.length}</h2>
        <div className='friendsList-container'>
            {props.info.data.map(friend => (
                <div key={friend.id} className='friend-container'>
                    <div className='friend-label-container'>
                        <div className='infoFriendment'>Name:</div>
                        <div className='infoFriendment'>Age:</div>
                        <div className='infoFriendment'>Email:</div>
                    </div>
                    <div className='friend-info-content'>
                        <div className='infoFriendment'><span>{friend.name}</span></div>
                        <div className='infoFriendment'><span>{friend.age}</span></div> 
                        <div className='infoFriendment'><span>{friend.email}</span></div>
                    </div>
                    <div className='friend-option-container'>
                        <button className='friend-option-btn' onClick={() => props.deleteFriend(friend.id)}>delete</button> 

                        <Link to={`/friends/update/${friend.id}`} onClick={() => props.editFriend(friend.name, friend.age, friend.email)} ><button className='friend-option-btn'>update</button></Link>
                        {/* <button className='friend-option-btn' onClick={() => props.updateFriend(friend.id, props.info.inputName, props.info.inputAge, props.info.inputEmail)}>update</button>  */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default friends;