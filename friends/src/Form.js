import React from 'react';

function Form() {
    return (
        <form action="">
            Name: <input type="text" name="name"/>
            Age: <input type="text" name="age"/>
            Email: <input type="text" name="email"/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form;