import React from 'react';

export default function EditFriend(props) {
  return (<form className="form" onSubmit={(event) => props.editFriend(event, props.id)}>
    <h4>edit Friend</h4>
    <input name='name' type="text" placeholder="Name" value={props.state.name} onChange={props.click}>
      {props.value}
    </input>
    <input name='email' placeholder="Email" value={props.state.email} onChange={props.click}>
      {props.value}
    </input>
    <input name='age' className="ageInput" type="number" placeholder="Age" value={props.state.age} onChange={props.click}>
      {props.value}
    </input>
    <button>Edit Friend</button>
  </form>)
}
