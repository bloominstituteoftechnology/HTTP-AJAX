import React from 'react';

import Friend from './Friend'
import Friends from './Friends'
import NewFriend from './Newfriend'

const FriendsList = (props) =>{
    return(
        <div className='friendlist '>
        <div className='friendlistCard '>
        {props.data.map((info,i) =>
            <Friend {...info}{...i} deleteFriendHandler={props.deleteFriendHandler}/>
            
            )}
        </div>
        
        <NewFriend 
        data={props.data}
        inputChangeHandler={props.inputChangeHandler}
        submitnewfriend ={props.submitnewfriend} 
        name ={props.name}
        age={props.age}
        email={props.email}
        />
        
        </div>
        
    )
        
        }  
export default FriendsList