import React from 'react';

function friends(props){


// console.log(props.info);
    return (
    <div>
        <div className='addFriend-container'>
        <form onSubmit={props.addFriend} id='inputForm'>
                <div className='friendInfo-input-container'>
                    <input 
                        type="text" 
                        placeholder='Friend Name'
                        name='inputName'
                        value={props.inputName}
                        onChange={props.handleChange}
                    />
                    <input 
                        type="number" 
                        placeholder='Friend Age'
                        name='inputAge'
                        value={props.inputAge}
                        onChange={props.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder='Friend Email'
                        name='inputEmail'
                        value={props.inputEmail}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='button-container'>
                    <button type='submit'>Save Friend</button>
                    <button onClick={() => props.clearFields()}>Clear</button>
                </div>                
            </form>
        </div>
        <div>
            <h2>Current Friend List</h2>
            {props.info.map(friend => (
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
                </div>
            ))}
        </div>
    </div>
    );
}

export default friends;