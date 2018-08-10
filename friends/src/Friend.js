import React from "react";


const Friend = props => {
  return (
    <div className="friends">
      <h2> Name: {props.friend.name} </h2> <h3> Age: {props.friend.age} </h3>
      <h3> Email: {props.friend.email} </h3>
      <button onClick={() => props.deleteMethod(props.friend.id)}>
        Delete
      </button>
      <form onSubmit={(event) => props.editFriend(event, props.friend.id)}>
        <input type="text"    name="name" onChange={props.handleChange}/>
        <input type="number"  name="age" onChange={props.handleChange} />
        <input type="email"  name="email" onChange={props.handleChange}/>
        {/* <button type="submit">Edit</button> */}
        <button onClick={() => props.editFriend(props.friend.id)}>Edit</button>
      </form>
    </div>
  );
};

export default Friend;
