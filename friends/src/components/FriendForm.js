import React from 'react';

class FriendForm extends React.Component {
    constructor() {
        super();
    }

    render() { 
        return (
            <form>
                <h2>Here is the friend form</h2>
                <input type='text' placeholder='Name' />

            </form>
        );
    }
}
 
export default FriendForm;
