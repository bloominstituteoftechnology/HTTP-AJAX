import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: props.friend,
        };
    }

    render() {
        return (
            <div>
                {this.state.friend.name}<br />
                {this.state.friend.age}
            </div>
        );
    }
}

export default Friend;