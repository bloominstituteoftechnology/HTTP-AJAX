import React from 'react';



const Form = (props) => {
    return (
        <div className = "form-div">
            <form >
                <div> Name : <input type = 'text'  /> </div>
                <div> Age : <input type = 'text' /> </div>
                <div> Email : <input type = 'text' /> </div>
                <button >Add Friend</button>
            </form>
        </div>
    )
}

export default Form;

{/*onChange = {this.changeHandler} name = "name" value = {this.state.newFriend.name}*/}
{/*} onChange = {this.changeHandler} name = "age" value = {this.state.newFriend.age} */}
{/*onChange = {this.changeHandler} name = "email" value = {this.state.newFriend.email} */}