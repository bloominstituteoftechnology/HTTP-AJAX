import React from 'react';

const AddForm=(props)=>{
    return(
        <form onChange={props.changeHandler}onSubmit={props.submitHandler}>
            <h1>Add A Friend!!!</h1>
            <input type="text" placeholder="name" name="name" value={props.currentName}/>
            <input type="text" placeholder="age" name="age" value={props.currentAge}/>
            <input type="text" placeholder="email" name="email" value={props.currentEmail}/>
            <button>Submit</button>
        </form>
    )

}

export default AddForm;