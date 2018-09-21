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
                        onChange={props.handleChange} />
                    <label>Friends Name</label>
                </div>
                <div>
                    <input placeholder="add a friends email..." 
                        type="text" required 
                        value={props.friend.email} 
                        name="email" 
                        onChange={props.handleChange} />
                    <label>Friends Email</label>
                </div>
                <div>
                    <input placeholder="add a friends age..." 
                        type="text" 
                        required 
                        value={props.friend.age} 
                        name="age" 
                        onChange={props.handleChange} />
                    <label>Friends Age</label>
                </div>
                <div>
                    <button onClick={props.handleAddNewFriend}> Submit New Friend</button>
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
    }),
    handleAddNewFriend: PropTypes.function,
    handleChange: PropTypes.function
}
export default NewFriendsForm;