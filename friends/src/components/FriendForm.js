import React from 'react';
import {Link} from 'react-router-dom';
import Friend from './Friend';

let FriendForm = props => {
    return (
        <div className="header">
            <h1>My Personal CRM</h1>
            {props.editMode === true ? <p>Here's the friend whose data you want to edit:</p> : null}
            {props.editMode === true ? <Friend friend={props.editFriend}/> : null}
            <form onSubmit={props.submitHandler} autoComplete="off">
                {props.editMode === true ? <p>Enter your friend's revised data below:</p> : <p>Enter your new friend's data below:</p>}
                <input name='name' type="text" value={props.value} placeholder="What's your friend's first name?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='age' type="number" value={props.value} placeholder="How old is your friend?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='email' type="email" value={props.value} placeholder="What's your friend's email?" autoComplete="off" onChange={props.changeHandler}/>
                <input name='likes' type="text" value={props.value} placeholder="What does your friend like? (e.g. dogs, cats, ponies)" autoComplete="off" onChange={props.changeHandler}/>
                <input name='pronoun' type="text" value={props.value} placeholder="Preferred gender pronoun (e.g. He, She, They)?" autoComplete="off" onChange={props.changeHandler}/>
                <input type="submit" />
            </form>
            <Link to="/" className='altbutton' onClick={props.failureHandler}>See Friends</Link>
        </div>
    )
}

export default FriendForm;