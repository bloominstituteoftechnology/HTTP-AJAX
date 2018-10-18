import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = props => {
  return (
    <Link to='/add'>
      <div className='add-button'>
        <i className="fas fa-plus"/>
        Add a friend
      </div>
    </Link>
  )
}
export default AddButton;
