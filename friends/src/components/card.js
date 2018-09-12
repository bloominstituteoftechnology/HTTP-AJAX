import React from 'react';
import './card.css';

const Card = (props) => {
if(props.data){
return (
<div className="friends">
{props.data.friends.data.map(friend => {
return(<div className="card" key={Math.random(Date.now())}>
<div className="txt">name: {friend.name}</div>
<div className="txt">age: {friend.age}</div>
<div className="txt">e-mail: {friend.email}</div>
</div>);
})}
</div>
);
}
else{
return (
<div>
loading...
</div>
);
}
}

export default Card;