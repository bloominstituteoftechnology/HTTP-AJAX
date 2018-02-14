import React from 'react';
import EditForm from './EditForm';

function Friend(props) {
    // const onEditToggle =
    //     (props.editing && (props.friend.id !== props.beingEdited)) ? { display: 'none' } : { display: 'block' };
    return (
        <li key={props.friend.id} className="friend">
            <div className="friend-name">
                {props.friend.name}
            </div>
            <div className="friend-age">
                {props.friend.age}
            </div>
            <div className="friend-email">
                {props.friend.email}
            </div>
            <EditForm
                editing={props.editing}
                friendID={props.friend.id}
                beingEdited={props.beingEdited}
                toggleEdit={props.toggleEdit}
                id={props.friend.id}
                name={props.friend.name}
                age={props.friend.age}
                email={props.friend.email}
                updateFriends={props.updateFriends}
            />
            <button
                onClick={() => {
                    props.toggleEdit(props.friend.id);
                }}
            >
                Edit
            </button>

            <button
                onClick={() => {
                    props.deleteFriend(props.friend.id);
                }}
            >
                Unfriend
            </button>
        </li>
    );
}

export default Friend;
