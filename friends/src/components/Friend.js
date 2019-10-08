import React from 'react';

import './Friend.scss';

export default function Friend({info, deleteFunc, setCurrentFriend}) {

  const {name, age, email, id} = info;

  return (

    <div className='friend'>

      <h2>{name}</h2>
      <p>Age: {age}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <div className='close' onClick={() => deleteFunc(id)}>X</div>
      <button onClick={() => setCurrentFriend(info)}>Update Friend</button>

    </div>

  )

}
