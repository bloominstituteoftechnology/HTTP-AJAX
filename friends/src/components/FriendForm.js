import React from 'react' ;
import './my-css.css' ;


const FriendForm = props => {
    return(
        <div className="form" >
            <h3 ><u>Enter New Friend Below</u></h3>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={props.propCreateNewFriend}
                    name="name"
                />
                <input 
                    type="number" 
                    placeholder="Age"
                    onChange={props.propCreateNewFriend}
                    name="age"
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    onChange={props.propCreateNewFriend}
                    name="email"
                />

                <button

                >
                    Submit
                </button>
            </form>
            <br/>
        </div>
    )
}
export default FriendForm ;