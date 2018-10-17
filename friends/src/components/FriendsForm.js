import React from 'react';
import './Friends.css';

const FriendsForm = props => {
    return (
        <div>
            <div className="friend-title">Friends</div>
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
                    <button className="submit" onClick={props.submit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FriendsForm;