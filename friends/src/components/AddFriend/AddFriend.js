import React from 'react';

function AddFriend (props) {
    console.log('AddFriend props: ', props);
    return (
        <form onSubmit={props._friendSubmitHandler} className="af">
            <label> Name: </label><input type="text" name="name" value={props.name} onChange={props._friendChangeHandler} placeholder="name" />
            <label> Age: </label><input type="text" name="age" value={props.age} onChange={props._friendChangeHandler} placeholder="age" />
            <label> Email: </label><input type="text" name="email" value={props.email} onChange={props._friendChangeHandler} placeholder="email" />
            <button type="submit" className="fs__button" >add friend</button>
        </form>
    )
}


export default AddFriend;
