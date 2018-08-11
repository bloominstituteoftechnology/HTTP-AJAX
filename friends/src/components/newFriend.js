import React from 'react';

export default function NewFriend(props) {
    return (
        <form className="form" onSubmit={props.submit}>
            <h4>Add New Friend</h4>
            <input name='name' type="text" placeholder="Name" value={props.state.name} onChange= {props.click}>{props.value}</input>
            <input name='email' placeholder="Email" value={props.state.email} onChange={props.click}>{props.value}</input>
            <input name='age' className="ageInput" type="number" placeholder="Age" value={props.state.age} onChange={props.click}>{props.value}</input>
            <button>Submit</button>
      </form>
    )
}
