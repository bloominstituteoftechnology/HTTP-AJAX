import React from 'react';

export default function Friend({info}) {

  const {name, age, email} = info;

  return (

    <div className='friend'>

      <h2>{name}</h2>
      <p>Age: {age}</p>
      <a href={`mailto:${email}`}>{email}</a>

    </div>

  )

}
