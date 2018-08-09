import React from 'react';

export default function EditFriend(props) {
    return (
        <form className="form" onSubmit={props.submit}>
            <h4>edit Friend</h4>
            <input name='name' type="text" placeholder="Name" value={props.newFriend} onChange= {props.click}>{props.value}</input>
            <input name='email' placeholder="Email" value={props.newFriend} onChange={props.click}>{props.value}</input>
            <input name='age' className="ageInput" type="number" placeholder="Age" value={props.newFriend} onChange={props.click}>{props.value}</input>
            <button>Submit</button>
      </form>
    )
}
