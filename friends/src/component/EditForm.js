import React from 'react';

export const EditForm = props => {
    return (
        <div>
            <form>
                <input
                    className="Edit__Form Form"
                    type= 'text'
                    placeholder= 'Name'
                    name= 'name'
                />
                <input
                    className="Edit__Form Form"
                    type= 'text'
                    placeholder= 'Age'
                    name= 'age'
                />
                <input
                    className="Edit__Form Form"
                    type= 'text'
                    placeholder= 'Email'
                    name= 'email'
                />
            </form>
        <button>Edit</button>
        </div>
    )
}