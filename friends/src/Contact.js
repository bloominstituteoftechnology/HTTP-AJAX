import React from 'react';
import './Contact.css';

function Contact(props) {
  return(
  <div className="contactCard">
    <h3>{props.name}</h3>
    <table className="info">
      <table className="age">{props.age} years old</table>  
      <table className="email">{props.address}</table>
    </table>  
  </div>  
  )
}

export default Contact;