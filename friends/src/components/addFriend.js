import React from 'react';

function addFriend(props)  {

    return (
        <div className='addFriend-container'>
        <form id='inputForm'>
                <div className='friendInfo-input-container'>
                    <input 
                        className='inputFields'
                        type="text" 
                        // ternary operator to check if form should display info for adding new friend or for updating existing friend
                        placeholder={props.updateFriend ? 'Update Name' : 'Add Friend Name'} 
                        name='inputName'
                        value={props.info.inputName}
                        onChange={props.handleChange}
                    />
                    <div className='ageInput-container'>
                        <input 
                            className='slider-input'
                            type="range" 
                            min='1'
                            max='110'
                            maxLength='3'
                            // ternary operator to check if form should display info for adding new friend or for updating existing friend
                            placeholder={props.updateFriend ? 'Update Age' : 'Add Friend Age'}
                            name='inputAge'
                            value={props.info.inputAge}
                            onChange={props.handleChange}
                        />
                        <input 
                            className='slider-value-container'
                            type="text"
                            placeholder='Age'
                            disabled
                            value={props.info.inputAge}
                        />
                    </div>
                    <input 
                        className='inputFields'
                        type="email" 
                        // ternary operator to check if form should display info for adding new friend or for updating existing friend
                        placeholder={props.updateFriend ? 'Update Email' : 'Add Friend Email'}
                        name='inputEmail'
                        value={props.info.inputEmail}
                        onChange={props.handleChange}
                    />
                </div>

                <div className='button-container'>
                    <button onClick={() => 
                        {
                            // ternary operator for determening which button invokation should happen; add new friend or update existing
                            props.updateFriend ? 
                                props.updateFriend(props.match.params.friendId, props.info.inputName, props.info.inputAge, props.info.inputEmail) : 
                                props.addFriend(props.info.inputName, props.info.inputAge, props.info.inputEmail)
                            
                            props.history.push('/friends');
                        }
                    }>
                        {/* {ternary operator for showing the correct text on the button; adding friend or updating} */}
                        {props.updateFriend ? 'Update Friend' : 'Add Friend'}
                    </button>
                    <button onClick={props.clearFields}>Clear</button>
                </div>                
            </form>
        </div> 
    );
    
}

export default addFriend;