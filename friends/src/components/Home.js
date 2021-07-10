import React from 'react'
import './friends.jpg'
import './Home.css';

const friendsPic = './friends.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <img src={friendsPic} />
        </div>
    )
}

export default Home