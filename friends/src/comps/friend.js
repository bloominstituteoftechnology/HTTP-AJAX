import React from 'react';
import './styles/singlefriend.scss';

const Friend = props => {
  const singleFriendDir = () => {
    props.history.push(`/friends/${props.id}`);
  };

  const editFriend = () => {
    props.history.push(`/friends/${props.id}/edit`);
  };

  const returnToFriends = () => {
    if (props.location.pathname === `/friends/${props.id}`) {
      props.history.push('/friends');
    }
  };

  const deleteFriend = () => {
    console.log('clicked');
    returnToFriends();
    props.deleteFriend(props.id);
  };
  return (
    <div className="friendWrapp">
      <div className="topHeader">
        <div className="closeCont">
          <i className="fas fa-window-close" onClick={deleteFriend} />
        </div>
        <h2 className="name">{props.name}</h2>
      </div>
      <div className="age">{props.age}</div>
      <div className="email">{props.email}</div>
      {props.location.pathname === `/friends/${props.id}` ? (
        <i class="far fa-edit" onClick={editFriend} />
      ) : (
        <i className="far fa-user" onClick={singleFriendDir} />
      )}
    </div>
  );
};

export default Friend;
