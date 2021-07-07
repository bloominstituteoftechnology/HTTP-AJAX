import React from 'react';
import {Button} from 'reactstrap';

const Form = props => {
    return (
        <>
            <form >
                <input type="text" placeholder="name" name="name" value={props.nameVal} onChange={props.changeHandler}></input>
                <input type="text" placeholder="age" name="age" value={props.ageVal} onChange={props.changeHandler}></input>
                <input type="email" placeholder="email" name="email" value={props.emailVal} onChange={props.changeHandler}></input>
                <Button  color="success" onClick={props.addFriend} >Save</Button>
            </form>
        </>
    )
}


export default Form;