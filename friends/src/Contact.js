import React from 'react';
import './Contact.css';
import { Trash, Edit } from 'react-feather';

function Contact(props) {
  return(
  <div className="contactCard">
    <h3>{props.name}</h3>
    <div className="info">
      <p className="age">{props.age} years old</p>  
      <p className="email">{props.address}</p>
    </div>
    <div className="editAndTrash">
      <Edit size={35}/>
      <Trash 
        size={35}
        onClick={props.delete}/>
    </div>
  </div>  
  )
}

export default Contact;