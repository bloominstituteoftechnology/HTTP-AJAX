import React from 'react';

const FriendForm = (props) => {
  return (
    <div>
      <form>
          <input onChange = {props.onChange} type="text" name='name' placeholder='name'/>
              <input onChange={props.onChange} type="text" name='age' placeholder='age'/>
              <input onChange={props.onChange} type="text" name='email' placeholder='email'/>
          <button>Submit</button>
          </form>
    </div>
  );
};

export default FriendForm