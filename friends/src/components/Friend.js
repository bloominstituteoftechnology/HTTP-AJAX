import React from 'react' ;
import './my-css.css' ;


const Friend = props => {
    return(
        <ul className="magic">
            <li>NAME: {props.propMapFriend.name}</li>
            <li>ID: {props.propMapFriend.id}</li>
            <li>AGE: {props.propMapFriend.age}</li>
            <li>EMAIL: {props.propMapFriend.email}</li>
        </ul>
    )
}
export default Friend ;