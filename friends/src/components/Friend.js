import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>ID: {this.props.id}</p>
                <p>AGE: {this.props.age}</p>
                <p>EMAIL: {this.props.email}</p>
            </div>
        )
    }
}

export default Friend