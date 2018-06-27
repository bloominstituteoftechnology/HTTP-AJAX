import React from "react";

const Form = props => {
  return (

      <div>
<input className="input-field" type="text" placeholder="name" value={props.newfriend} onChange={props.nameChangeHandler} /> <br />

                 <input className="input-field" type="number" placeholder="age" value={props.age} onChange={props.ageChangeHandler} /><br />

             <input className="input-field" type="text" placeholder="email" value={props.email} onChange={props.emailChangeHandler} /><br />

	   <button className="btn-style" onClick={props.addFriend}>Add Friend</button>
</div>
  );
}

export default Form;	
