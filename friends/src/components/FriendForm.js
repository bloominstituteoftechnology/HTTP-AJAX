import React from 'react';
import {Link} from 'react-router-dom';

let FriendForm = props => {
    return (
        <div className="header">
            <h1>My Personal CRM</h1>
            <form onSubmit={props.submitHandler} autoComplete="off">
                <p>Enter your data below:</p>
                <input name='name' type="text" value={props.value} placeholder="What's your friend's full name?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='age' type="number" value={props.value} placeholder="How old is your friend?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='email' type="email" value={props.value} placeholder="What's your friend's email?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='likes' type="text" value={props.value} placeholder="What does your friend like? (e.g. dogs, cats, ponies)" autoComplete="off" onChange={props.changeHandler}/>
                <input name='pronoun' type="text" value={props.value} placeholder="Preferred gender pronoun (e.g. He, She, They)?" autoComplete="off" onChange={props.changeHandler}/>
                <input type="submit" />
            </form>
            <Link to="/" className='altbutton'>See Friends</Link>
        </div>
    )
}

export default FriendForm;