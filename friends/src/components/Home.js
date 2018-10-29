import React from 'react'
import './friends.jpg'

const friendsPic = './friends.jpg';

const Home = () => {
    return (
        <div>
            <h1>The HOME PAGE</h1>
            <img src={friendsPic} />
        </div>
    )
}

export default Home