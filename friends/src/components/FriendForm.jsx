import React from 'react'

const FriendForm = props => {
    return <div className="form-bearer">
        <form onSubmit={(e) => props.createFriend(e)}>
            <input type="text" name="name" id="name" 
            onChange={(e) => props.friendInputChange(e.target)}
             value={props.friendForm.name}/>

            <input type="text" name="email" id="email" 
            onChange={(e) => props.friendInputChange(e.target)} 
            value={props.friendForm.email}/>

            <input type="text" name="age" id="age" 
            onChange={(e) => props.friendInputChange(e.target)}
             value={props.friendForm.age}/>

            <input type="submit" value="Add New Friend"/>
        </form>
    </div>
}
export default FriendForm;