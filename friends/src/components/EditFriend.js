import React from "react";

const EditFriendForm = props => {
  return (
    <div>
      <input
        placeholder={props.friend.name}
        type="text"
        onChange={props.editHandler}
      />
      <button onClick={props.submitEdits}>Save</button>
    </div>
  );
};

export default EditFriendForm;