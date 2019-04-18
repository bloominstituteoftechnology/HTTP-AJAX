import React from 'react';
import { Route, NavLink } from 'react-router-dom';


function Friend({ items, match, deleteItem, setUpdateForm }) {
  const { id } = match.params;
  const item = items.find(thing => `${thing.id}` === id); 
  if (!item) {
    return <h3>Loading friends...</h3>;
  }
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>Is {item.age} years old.</h4>
          <h4>Contact them at {item.email}</h4>
          <h4>Friend ID:{item.id}</h4>
        </div>
      </div>

      {/* <nav className="friend-sub-nav">
        <NavLink exact to={`/friend-list/${item.id}`}>
          the story
        </NavLink>
        <NavLink to={`/friend-list/${item.id}/shipping`}>shipping</NavLink>
      </nav>
      <Route
        exact
        path="/friend-list/:id"
        render={() => <ItemDescription friend={friend} />}
      /> */}
    

      {/* <button
        onClick={e => {
          console.log('Hitting delete button - onClick handler');
          deleteFriend(e, item.id);
        }}
        className="md-button"
      >
        Delete Friend
      </button>
      <button onClick={e => setUpdateForm(e, item)} className="md-button">
        Update Friend
      </button> */}
    </div>
  );
}

export default Friend;
