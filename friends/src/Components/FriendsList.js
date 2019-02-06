import React from 'react';

class FriendsList extends React.Component {

    constructor() {
        super();
        this.state = {name: '',
                      age: 0,
                      email: ''}
    }

    update = id =>{
        
    }

    render() {
        return (
            <form >
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Email" />
                <input type="button" value="Save" />
            </form>
        )
    }
}

export default FriendsList;