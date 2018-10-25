import React from 'react';
import './Contact.css'
function Contact(props) {
  return(
  <div className="contactCard">
    <div className="nameAndAge">
      <h3>{props.name}</h3>
      <p>{props.age} years old</p>
    </div>  
    <h4>{props.address}</h4>
  </div>  
  )
}

export default Contact;