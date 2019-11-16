import React from 'react';
import '../App.css';

const EditFriend = props => {
  return (
    <div>
      <form>
      Name: <input placeholder="Name" type="text"
      onChange={props.editHandler} name="nameEdit" />
      <button onClick={props.saveEdit} value={props.nameValue}>Save</button>
      </form>

      <form>
      Age: <input placeholder="Age" type="number"
      onChange={props.editHandler} name="ageEdit" />
      <button onClick={props.saveEdit} value={props.ageValue}>Save</button>
      </form>

      <form>
      Email: <input placeholder="Email" type="text"
      onChange={props.editHandler} value={props.emailValue} name="emailEdit" />
      <button onClick={props.saveEdit}>Save</button>
      </form>
    </div>
  )
}

export default EditFriend;
