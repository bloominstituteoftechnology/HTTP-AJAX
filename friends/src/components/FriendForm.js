import React from 'react';
import {Link} from 'react-router-dom';

let FriendForm = props => {
    return (
        <div className="header">
            <h1>My Personal CRM</h1>
            <Link to="/" className='altbutton'>See Friends</Link>
            <form onSubmit={props.submitHandler}>
                <input name='name' type="text" value={props.value} placeholder="What's your friend's full name?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='age' type="number" value={props.value} placeholder="How old is your friend?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='email' type="email" value={props.value} placeholder="What's your friend's email?" autoComplete="off" onChange={props.changeHandler}/>
                <input type="submit" />
            </form>
            
        </div>
    )
}

export default FriendForm;