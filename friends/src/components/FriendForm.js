import React from 'react';

function friendForm() {
    return (
        <>
            <form>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Age" />
                <input type="text" placeholder="Email" />
                <button type="submit">Add My New Friend</button>
            </form>
        </>
    )
}

export default friendForm;