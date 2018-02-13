import React from 'react';
import './Friend.css';

const Friend = props => {
  let index = props.index;

  const onDelete = event => {
    event.preventDefault();
    props.deleteFriend(props.friend.id);
  };

  return (
    <li className="friend">
      <form type="submit" value={index} onSubmit={onDelete}>
        <div className="friend__name">{props.friend.name}</div>
        <div className="friend__age">{props.friend.age}</div>
        <div className="friend__email">{props.friend.email}</div>
        <input type="submit" value="delete" className="form__button" />
        {console.log(index)}
      </form>
    </li>
  );
};

export default Friend;
