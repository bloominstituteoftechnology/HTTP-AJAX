import React from 'react';


function FriendForm(props) {
    return (
        <React.Fragment>
            
            <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={props.friend.name}
                        onChange={props.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="age"
                        name="age"
                        value={props.friend.age}
                        onChange={props.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        value={props.friend.email}
                        onChange={props.handleChange}
                    />
                    <button onClick={props.handleSubmit}>Save Friend</button>
    </form>
        </React.Fragment>
    )
}

export default FriendForm;