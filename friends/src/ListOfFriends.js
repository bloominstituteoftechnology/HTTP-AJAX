import React from 'react';
import SingleFriend from './SingleFriend';

const ListOfFriends = props => {
    console.log('list: ', props)
    return (
    <div>
        {props.friendsData.map(friendItem => {
            return (
                <SingleFriend
                    key={friendItem.id}
                    friendItem={friendItem}
                    handleSetData={props.handleSetData}

                />
            )
        })}
    </div>
    )
}
 
export default ListOfFriends;