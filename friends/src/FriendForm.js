import React from 'react';
import './FriendForm.css';

const FriendForm = props => {
    console.log(props);
    return (
        <div>
            <form className="form">
                <label> Name:</label>
            <input type="text" name="name" value={props.name} onChange={props.onChange} />           

                   <label> Age:</label>
            <input type="text" name="age" value={props.age} onChange={props.onChange} />
                    <label>Email:</label>
            <input type="text" name="email" value={props.email} onChange={props.onChange} />

                <button type="submit" onClick={props.onClick}> Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;
