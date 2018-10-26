import React from 'react';
import {Button} from 'reactstrap';

const Form = props => {
    return (
        <>
            <form >
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
                <input type="text" placeholder="age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
                <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.changeHandler}></input>
                <Button  color="success" onClick={this.addFriend} >Save</Button>
            </form>
        </>
    )
}


export default Form;