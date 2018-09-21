import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function NewFriendsForm(props) {
    return (
        <Fragment>
            <h1>Making New Friends</h1>
            <form>
                <div>
                    <input placeholder="add a friends name..." 
                        type="text" 
                        required value={props.friend.name} 
                        name="name" 
                        onFriendChange={props.handleChange} />
                    <label>Friends Name</label>
                </div>
                <div>
                    <input placeholder="add a friends email..." 
                        type="text" required 
                        value={props.friend.email} 
                        name="email" 
                        onFriendChange={props.handleChange} />
                    <label>Friends Email</label>
                </div>
                <div>
                    <input placeholder="add a friends age..." 
                        type="text" 
                        required 
                        value={props.friend.age} 
                        name="age" 
                        onFriendChange={props.handleChange} />
                    <label>Friends Age</label>
                </div>
                <div>
                    <button>Enter</button>
                </div>
            </form>
        </Fragment>
    )
}

NewFriendsForm.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    })
}
export default NewFriendsForm;