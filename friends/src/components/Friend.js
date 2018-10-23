import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>NAME</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Friend