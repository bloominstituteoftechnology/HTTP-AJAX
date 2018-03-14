import React, { Component } from 'react';

class UpdateFriend extends Component {
    render() {
        return (
            <div>
                <ul className="friend-grid">
                    <li className="friend">
                    <form onSubmit={this.handleUpdate}>
                        <div className="friend-name">Name: 
                        <input name='updateName' type='text' value={this.props.updateName} onChange={this.props.handleChange} placeholder='Update Name' />
                        </div>
                    </form>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UpdateFriend;