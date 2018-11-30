import React from "react";
import "./FriendsForm.css";

function FriendsForm(props) {
  return (
    <div className="new-friends">
      <div className="friends-form">
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={props.name}
              onChange={props.change}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={props.age}
              onChange={props.change}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={props.email}
              onChange={props.change}
              required
            />
          </label>
          <input
            type="submit"
            onClick={() =>
              props.postMsg(props.data.name, props.data.age, props.data.email)
            }
            value="Add New Friend"
          />
        </form>
      </div>
    </div>
  );
}

export default FriendsForm;
