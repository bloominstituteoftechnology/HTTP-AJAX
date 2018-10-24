import React from 'react'

class Friend extends React.Component {

    render() {
        return (
            <div className="cta">
                <p className="text">
                    Name: {this.props.friends.name}<br />
                    Age: {this.props.friends.age}yrs<br />
                    Email: {this.props.friends.email}<br />            
                </p>
                <button onClick={() => this.props.delete(this.props.friends.id)}>Delete Friend</button>
            </div>
        );
    }
}

export default Friend