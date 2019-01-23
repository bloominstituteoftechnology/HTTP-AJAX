import React, { Component } from 'react'

class AddFriend extends Component {
    render(){
        return (
            <form>
                Add a new friend: <br/>
                Name: <input type="text" placeholder="Name"/><br/>
                Age: <input type="text" placeholder="Name"/><br/>
                Email: <input type="text" placeholder="Name"/> <br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddFriend;