import React from 'react' ;
import Axios from 'axios' ;
import './my-css.css' ;
import Friend from './Friend' ;
import Delete from './Delete' ;


const FriendsList = props => {
    return(
        <div className="">
            {props.propFriendsData.map(mapFriend => {
                    return(
                        <div> 
                        <Friend 
                            propMapFriend={mapFriend}
                            key={mapFriend.id}
                            
                        />
                        
                        </div>                    
                    )
                })
            }
        </div>
    )
}   
export default FriendsList ;
