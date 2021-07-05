import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
class Friend extends React.Component {

    render() {
        return (
            <div className="cta">
                <div>
                    <NavLink className="link" to={`/friends/${this.props.friends.id}`}>
                        <p className="text">
                            Name: {this.props.friends.name}<br />
                            Age: {this.props.friends.age}yrs<br />
                            Email: {this.props.friends.email}<br />
                        </p>
                    </NavLink>
                    <button onClick={() => this.props.delete(this.props.friends.id)}>Delete Friend</button>
                </div>
            </div>
        );
    }
}

export default Friend