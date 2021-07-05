import React from "react";

const NewFriendForm = props => {
  return (
    <div>
      <div ClassName="Form-header">Homies</div>
      <div className="form">
          <form>
          <label className="name">
                        Name:
                        <input
                            type="text"
                            name="Name"
                            value={props.Name}
                            onChange={props.handleUpdate}
                            placeholder="Name"
                        />
                    </label>
                    <label className="age">
                        Age:
                        <input
                            type="number"
                            name="Age"
                            value={props.Age}
                            onChange={props.handleUpdate}
                            placeholder="Age"
                        />
                    </label>
                    <label className="email">
                        Email:
                        <input
                            type="email"
                            name="Email"
                            value={props.Email}
                            onChange={props.handleUpdate}
                            placeholder="Email"
                        />
                    </label>
                    <button className="submit" onClick={props.submitFriend}>
                        Submit
                    </button>
          </form>
      </div>
    </div>
  );
};

export default NewFriendForm;