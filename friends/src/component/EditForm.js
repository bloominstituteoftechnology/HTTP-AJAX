import React from 'react';

export const EditForm = props => {
    return (
        <div>
            <form>
                <input
                    type= 'text'
                    placeholder= 'Name'
                    name= 'name'
                />
                <input
                    type= 'text'
                    placeholder= 'Age'
                    name= 'age'
                />
                <input
                    type= 'text'
                    placeholder= 'Email'
                    name= 'email'
                />
                <button>Edit</button>
            </form>
        </div>
    )
}