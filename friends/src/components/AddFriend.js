import React from 'react';

class AddFriend extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>Add a friend</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter a name..."></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddFriend;