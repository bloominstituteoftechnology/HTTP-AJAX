import React from 'react';

export default class Friend extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            video: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchMovide(id);
    }
    
    render() {
        return(
            <div className="friend-card">
                <p>{props.name}</p>
            </div>
        )
    }

}

export default Friend;