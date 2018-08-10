import React from "react";
import "./App.css";

const List = props => {
  return (
    <div>
      {props.list.map(item => (
        <div className="friendList" key={item.id}>
          <section>{item.name}</section>
          <section>{item.age}</section>
          <section>{item.email}</section>
          <button onClick={() => props.deleteFriend(item.id)}>
            Delete Friend
          </button>
          <form onSubmit={() => props.editFriend(item.id)}>
              <input onChange={props.handleChange} type="text" placeholder="name" />
              <input onChange={props.handleChange} type="age" placeholder="age" />
              <input onChange={props.handleChange} type="email" placeholder="email" />
              <button type="submit" onClick={props.editFriend}>Edit Friend</button>
            </form>
        </div>
      ))}
    </div>
  );
};
export default List;
