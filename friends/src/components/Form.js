import React, {Component} from "react";

const Form = (props) => {
    return(
        <form action="#" method="post" onSubmit={props.addFriend}>
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