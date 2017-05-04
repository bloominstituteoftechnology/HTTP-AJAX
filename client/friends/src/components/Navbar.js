import React from 'react';

export default (props) => {
  return (
    <div className="Navbar nav navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Hello</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Contacts</a></li>
        </ul>
        <div className="navbar-form navbar-right">
          <a href="#openModal"><button type="submit" className="btn btn-default">Add New Contact</button></a>
        </div>
      </div>
    </div>
  );
};