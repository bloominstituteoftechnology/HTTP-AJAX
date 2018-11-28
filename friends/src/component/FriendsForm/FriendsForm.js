import React from "react";

function FriendsForm() {
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
        </form>
      </div>
    </div>
  );
}
