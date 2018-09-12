import React from 'react';



function Friend({friend}) {
const{name, age, email} = friend;
    return (
      <div className="Friend">
      <h1>{name}</h1>
      <h2>Age:{age}</h2>
      <h2>Em:{email}</h2>
      
      </div>
    );
  }


export default Friend;