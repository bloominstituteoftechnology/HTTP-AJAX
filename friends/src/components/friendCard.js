import React from 'react';
import './friendCard.css';

const FriendCard = ({ friend }) => {
    const { id, name, age, email, } = friend;
    return (
    
    <div className="cardstyle">
    <div className="friendCard">
        <div className="friendName">
        <h2>{name}</h2>
        </div>
        <div className="oldNumer">
        <h3>{age}</h3>
        </div>
    </div>
    </div>
  );
};

export default friendCard;