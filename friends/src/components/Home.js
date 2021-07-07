import React from 'react';

const Home = props => {
    return (
        <div>
            

            <div className='home-wrapper'>
                <h1 className='home-welcome-text'>Welcome</h1>
                <div className='home-friends-button' onClick={() => props.history.push('./friends')}>Friends</div>
            </div>
        </div>
    );
};

export default Home