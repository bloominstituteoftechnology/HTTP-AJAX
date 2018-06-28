import React from 'react' ;
import Axios from 'axios' ;
import Friend from './Friend' ;


const FriendsList = props => {
    return(
        <div>
            {props.propFriendsData.map(mapFriend => {
                    return(
                        <Friend 
                            propMapFriend={mapFriend}
                            key={mapFriend.id}
                            
                        />                   
                    )
                })
            }
        </div>
    )
}   
export default FriendsList ;
