import React from 'react';
import { Link } from 'react-router-dom';


const Cards = (props) => {
  return(
    <div className='cards'>
      {props.items.map((item) => 
        <div key={item.id} className='contact-card'>
          <h2>{item.name}</h2>
          <p>Age:{item.age}</p>
          <p>Email:{item.email}</p>
          <div onClick={()=>{props.deleteItem(item.id)}} className='delete'>x</div>
          <Link 
            to='/edit-form' 
            onClick={() =>{}}  
            className='edit'>EDIT</Link>
        </div>                
      )}
    </div>
  );
}

export default Cards;