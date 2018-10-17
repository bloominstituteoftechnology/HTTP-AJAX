import React from 'react';

const NewFriend = props => {
    return (
        <div>
            <h1>Add New Friend</h1>
            <form>
                <label>Name: </label>
                <input />
                <br />

                <label>Age: </label>
                <input />
                <br />

                <label>Email: </label>
                <input />
                <br />

                <button>Add New Friend</button>
            </form>
        </div>
    )
}

export default NewFriend;