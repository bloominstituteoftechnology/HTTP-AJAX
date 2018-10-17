import React from 'react';
// import Route from 'react-router-dom';
import FriendsList from './FriendsList';

function Home(props) {

    return(
        <div>
            <FriendsList {...props}/>
        </div>
    )
}

export default Home;