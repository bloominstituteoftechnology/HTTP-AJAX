import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function Friend({ items, match, deleteItem, setUpdateForm }) {
  const { id } = match.params;
  const item = items.find(thing => `${thing.id}` === id); 
  console.log('rendering Item: ', items, item);
  if (!item) {
    return <h3>Loading items...</h3>;
  }
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
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
    

      <button
        onClick={e => {
          console.log('Hitting delete button - onClick handler');
          deleteItem(e, item.id);
        }}
        className="md-button"
      >
        Delete Item
      </button>
      <button onClick={e => setUpdateForm(e, item)} className="md-button">
        Update Item
      </button>
    </div>
  );
}

export default Friend;
