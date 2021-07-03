import React from 'react';
import './Friends.css';

function FriendsForm(props) {
    const handleClick = ev => {
        ev.preventDefault();
        if (props.isEditing) {
          props.updateItem();
        } else {
          props.submit();
        }
        props.history.push('/');
      };

    return (
        <div className="form-container">
            <div className="friend-title">{props.isEditing ? 'Edit Friend' : 'Add New Friend'}</div>
            <div className="form">
                <form>
                    <label className="name">
                        Name:
                        <input
                            type="text"
                            value={props.newName}
                            onChange={props.nameAdd}
                            placeholder="Name"
                        />
                    </label>
                    <label className="age">
                        Age:
                        <input
                            type="text"
                            value={props.newAge}
                            onChange={props.ageAdd}
                            placeholder="Age"
                        />
                    </label>
                    <label className="email">
                        Email:
                        <input
                            type="text"
                            value={props.newEmail}
                            onChange={props.emailAdd}
                            placeholder="Email"
                        />
                    </label>
                    <button className="submit" onClick={handleClick}>
                        {props.isEditing ? 'Update Friend' : 'Add Friend'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FriendsForm;