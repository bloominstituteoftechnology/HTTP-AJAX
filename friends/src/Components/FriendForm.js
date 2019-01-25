import React from 'react';
import PropTypes from 'prop-types';

class FriendForm  extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           name: '',
           age: '',
           email: '',
       }
   }

   changeHandler = e =>{
       this.setState([e.target.name] , event.target.value)}
   }
    
    
render() 
        {
    return (
        <div>
            
            <input type='text' 
            name='name'
            placeholder='Name'
            onChange={this.changeHandler}
            />
            <input type='number' 
            name='age'
            placeholder='Age'
            onChange={this.changeHandler}
            />
            <input type='text' 
            name='email'
            placeholder='Email'
            onChange={this.changeHandler}
            />
            <button type='submit' onClick={this.addFriend}>Add Friend</button>
        </div>
    );
}

FriendForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendForm;