import React from 'react';

function FriendsForm(props) {
    return (
        <form>
            <input 
                value={props.inputName} 
                name="name"
                onChange={props.handleInput}
                placeholder="Name" />
            <input 
                value={props.inputAge} 
                name="age"
                onChange={props.handleInput}
                placeholder="Age" />
            <input 
                value={props.inputEmail}
                name="email" 
                onChange={props.handleInput}
                placeholder="Email address" />
            <button onClick={props.addFriend}>Add New Friend</button>
        </form>
    );
}

export default FriendsForm;


// import React from "react";
// import "./ToDo.css";

// function ToDoForm(props) {
//     return (
//         <form>
//             <input value={props.inputText} onChange={props.handleInput} />
//             <button onClick={props.addToDo}>Add To Do</button>
//             <button onClick={props.clearComplete}>Clear Completed</button>
//         </form>
//     );
// }

// export default ToDoForm;