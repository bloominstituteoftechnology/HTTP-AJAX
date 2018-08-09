import React from 'react';

const Inputs = props => {
    return (
        <div>
        <form onSubmit={props.newFriend}>

          <input
            type='text'
            placeholder='name'
            name='name'
            value={props.name}
            onChange={props.friend}
          />

          <br />

          <input
            type='number'
            placeholder='0'
            name='age'
            value={props.age}
            onChange={props.friend}
          />

          <br />

          <input
            type='email'
            placeholder='email'
            name='email'
            value={props.email}
            onChange={props.friend}
          />

          <br />

          <button onClick={props.newFriend}>Add Friend</button>

        </form>
        </div>
    );
}

export default Inputs;