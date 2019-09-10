import React from "react";

const Friends = props => {
  console.log(props);
  return (
    <div className="friends-container">
      {props.friends.map(friend => {
        return (
          <div>
            {!props.isEditing ? (
              <div className="friend-card">
                <div className="trash-can-contianer">
                  <i
                    onClick={ev => {
                      props.deleteFriend(ev, friend.id);
                    }}
                    className="far fa-times-circle"
                  />
                </div>
                <div className="robot-container">
                  <img className="robot" alt="robots" src={`https://robohash.org/${friend.id}?`} />
                </div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                <button
                  onClick={ev => {
                    props.toggleEditFriend(ev, friend.id);
                  }}
                >
                  Change
                </button>
              </div>
            ) : (
              <form className="friend-form" onSubmit={ev => props.updateFriend(ev, friend.id)}>
                <input
                  className="friend-form-input"
                  onChange={props.changeHandler}
                  name="name"
                  type="input"
                  placeholder="name"
                />
                <input
                  className="friend-form-input"
                  onChange={props.changeHandler}
                  name="age"
                  type="input"
                  placeholder="age"
                />
                <input
                  className="friend-form-input"
                  onChange={props.changeHandler}
                  name="email"
                  type="input"
                  placeholder="email"
                />
                <button type="submit">Update Friend</button>
              </form>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
