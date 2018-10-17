import React from 'react';
// import Route from 'react-router-dom';
import FriendsList from './FriendsList';

const Home = (props) => {

    return(
        <div>
            <FriendsList {...props}
            items = {props.items}
            newFriends = {props.newFriends}
            addFriend = {props.addFriend}
            deleteFriend={props.deleteFriend}
            inputHandler = {props.changeHandler}/>
        </div>
    )
}

export default Home;