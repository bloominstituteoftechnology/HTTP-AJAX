import React from 'react'

const FriendForm = props => {
    const submitForm = (e) => {
        e.preventDefault();
        if(props.updateState) {
            props.updateFriend(props.updateId); 
        } else {
            props.createFriend(); 
        }
    }
    return <div className="form-bearer">
        <form onSubmit={(e) => submitForm(e)}>
            <input type="text" name="name" id="name" 
            onChange={(e) => props.friendInputChange(e.target)}
             value={props.friendForm.name} placeholder="Name"/>

            <input type="text" name="email" id="email" 
            onChange={(e) => props.friendInputChange(e.target)} 
            value={props.friendForm.email} placeholder="Email"/>

            <input type="text" name="age" id="age" 
            onChange={(e) => props.friendInputChange(e.target)}
             value={props.friendForm.age} placeholder="Age"/>

            <input type="submit" value={!!props.updateState 
                ? 'Update Friend' : 'Add Friend'}/>
        </form>
    </div>
}
export default FriendForm;