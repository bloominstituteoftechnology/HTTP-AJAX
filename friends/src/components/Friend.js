import React from 'react' ;
import './my-css.css' ;
import FriendForm from './FriendForm'


const Friend = props => {
    return(
        <div className="magic">
            <ul>
                <li>NAME: {props.propMapFriend.name}</li>
                <li>ID: {props.propMapFriend.id}</li>
                <li>AGE: {props.propMapFriend.age}</li>
                <li>EMAIL: {props.propMapFriend.email}</li>
            </ul>
            
        </div>
    )
}
export default Friend ;