import React from "react";
import "./FriendsForm.css";

function FriendsForm(props) {
  return (
    <div className="new-friends">
      <div className="friends-form">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Age:
            <input type="number" name="age" />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email address"
              placeholder="Enter Email"
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default FriendsForm;
