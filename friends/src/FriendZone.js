import React, {Fragment} from 'react';
import PropTypes from 'prop-types';



const FriendZone = (props) => {

    return (

      <Fragment>
            <h2> Have A Friend You'd Like To Add?</h2>
        <form>
          <input  
          type="text" 
          required value= {props.friend.name}  
          name="name"
          placeholder="Name" 
          onChange={props.handleChange} />
          <input  
          type="text" 
          value= {props.friend.age} 
          name="age"
          placeholder="Age" 
          onChange={props.handleChange}/> 
          <input  
          type="text" 
          value= {props.friend.email} 
          name="email" 
          placeholder="Email" 
          onChange={props.handleChange}/>
          <button type="submit" onClick={props.handleNameAdd}> Add A Friend </button>
         </form>
      </Fragment>

    );
  }

  FriendZone.propTypes = {
      friend: PropTypes.shape({
          name: PropTypes.string,
          age: PropTypes.number,
          email: PropTypes.string,
      }),
      handleNameAdd: PropTypes.func,
      handleChange: PropTypes.func,

  }


export default FriendZone;