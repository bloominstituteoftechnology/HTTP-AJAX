import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
        <div>
            {this.props.friends.map(friend => (
                <div>
                    <h1>{friend.name}</h1>
                    <p>ID: {friend.id}</p>
                    <p>AGE: {friend.age}</p>
                    <p>EMAIL: {friend.email}</p>
                </div>
            ))}
        </div>
        )
    }
}

export default Friend