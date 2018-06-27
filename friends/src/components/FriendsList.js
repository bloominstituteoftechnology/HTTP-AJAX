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
 {/* 
    <ul key={mapFriend.id}>
        <li>NAME: {mapFriend.name}</li>
        <li>ID: {mapFriend.id}</li>
        <li>AGE: {mapFriend.age}</li>
        <li>EMAIL: {mapFriend.email}</li>
    </ul> 
*/}