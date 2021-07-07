import React from 'react'
import './App.css';


const Friend = (props) => {
    
    return(
<div id={props.key}>
<p>
{props.friend.name}
</p>

<p>
{props.friend.age}
</p>

<p>
{props.friend.email}
</p>

<span> Ø </span>
</div>

)}
    
export default Friend