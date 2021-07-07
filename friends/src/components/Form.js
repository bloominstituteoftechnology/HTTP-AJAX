import React from "react";

const Form = (props) => {
    //If you used to conditionally omit it with onSubmit={condition && value}, 
    //pass onSubmit={condition ? value : undefined} instead.
    const submit = (props.update ? props.update : props.addFriend);
    return(
        <form action="#" method="post" onSubmit={submit}>
            <p>Add Friend</p>
            <div className="input">
                Name:<input name="name" type="text" onChange={props.change} required value={props.name}></input>
                Age:<input name="age" type="text" onChange={props.change} required value={props.age}></input>
                Email:<input name="email" type="text" onChange={props.change} required value={props.email}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;