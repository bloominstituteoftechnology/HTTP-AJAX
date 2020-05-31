import React from 'react';



const FriendsList = props => {
    console.log("PROPS7", props);
    return(<div>

                {props.friends.map((friend, index)=> {
                    return(
                        <div key={index + friend}>
                        {friend.name} {friend.age} {friend.email}
                            
                        </div>

                    );
                })}
           </div>
               
         
        
    );
};






export default FriendsList;