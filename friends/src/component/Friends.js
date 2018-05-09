import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Friends = ({ friends, handleDelete }) => 
  <div>
    <div>Friends List:</div>
    <div style={styles.list}>
    { friends.map(friend => 
      <div key={friend.id} style={{ padding: '5px', backgroundColor: friend.color}}>
        <div>{friend.name}</div>
        <div>{friend.age}</div>
        <div>{friend.email}</div>
        <Link to={`/edit/${friend.id}`}><button>Edit</button></Link>
        <button onClick={() => handleDelete(friend.id)}>Delete</button>
      </div>
    )}
    </div>
  </div>

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
}
export default Friends;
