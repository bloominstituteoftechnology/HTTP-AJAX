import React from 'react';
import { prependOnceListener } from 'cluster';



const FriendZone = (props) => {

    return (

      <React.Fragment>
            <p> Have A Friend You'd Like To Add?</p>
        <form>
          <input  ref="name" type="text" name="name" value= "props.value" placeholder="Name"> + </input>
          <input  ref="age" type="text" name="age" value= "props.value" placeholder="Age"> + </input>
          <input  ref="email" type="text" name="email" value= "props.value" placeholder="Email"> + </input>
          <button type="submit"> Add A Friend </button>
         </form>
      
      </React.Fragment>

    );
  }


export default FriendZone;