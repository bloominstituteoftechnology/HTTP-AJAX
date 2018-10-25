import React from 'react';
import './Contact.css';

function Contact(props) {
  return(
  <div className="contactCard">
    <h3>{props.name}</h3>
    <table className="info">
      <p className="age">{props.age} years old</p>  
      <p className="email">{props.address}</p>
    </table>  
  </div>  
  )
}

export default Contact;