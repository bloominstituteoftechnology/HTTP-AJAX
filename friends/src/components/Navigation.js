import React from 'react';
import {Link} from "react-router-dom";
import './navigation.css';

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
    <Link to="/">Friends</Link>
    <Link to="/add">Add New Friend</Link>
    <Link to="/update">Update Current Friend</Link>
    <Link to="/delete">Delete a Friend</Link>
  </div>
);
  }
}

export default Navigation;
