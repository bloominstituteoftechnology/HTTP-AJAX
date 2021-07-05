import React from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link to='/'>Friends List</Link>
          <Link to='/add/'>Add Friend</Link>
          
          
        </Navbar>
      </div>
    );
  }
}