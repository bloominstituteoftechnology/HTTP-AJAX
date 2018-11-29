import React from 'react';

function friends(props){


// console.log(props.info);
    return (
    <div>
        <div className='addFriend-container'>
        <form  id='inputForm'>
                <div className='friendInfo-input-container'>
                    <input 
                        type="text" 
                        placeholder='Friend Name'
                        name='inputName'
                        value={props.info.inputName}
                        onChange={props.handleChange}
                    />
                    <input 
                        type="number" 
                        placeholder='Friend Age'
                        name='inputAge'
                        value={props.info.inputAge}
                        onChange={props.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder='Friend Email'
                        name='inputEmail'
                        value={props.info.inputEmail}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='button-container'>
                    <button onClick={() => props.addFriend(props.info.inputName, props.info.inputAge, props.info.inputEmail)}>Save Friend</button>
                    <button onClick={props.clearFields}>Clear</button>
                </div>                
            </form>
        </div>
        <div>
            <h2>Current Friend List of {props.info.data.length}</h2>
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
                        <button className='friend-option-btn'>delete</button> 
                        <button className='friend-option-btn'>update</button> 
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default friends;