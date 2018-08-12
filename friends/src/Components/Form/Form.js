import React from 'react';

const Form = props => {
    return (
        <div>
         <form>
            <label for="name">Name:</label>
            <input type="text" name="name" onChange={props.inputHandler}/>
            <label for="age">Age:</label>
            <input type="number" name="age" onChange={props.inputHandler}/>
            <label for="email">E-Mail:</label>
            <input type="email" name="email" onChange={props.inputHandler}/>
            </form>
        <div>
            <button onClick={props.addFriend}>Add Friend</button>
        </div>
        </div>
    )};

export default Form;