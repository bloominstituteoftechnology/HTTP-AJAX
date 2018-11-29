import React from 'react';


class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0, 
            email: "", 
        }
    }
    
    render() {
        return (
            <div className="form">
            <form>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Name"
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                />
                <button>Enter</button>
            </form>
            </div>
        )
    }
}

export default FriendForm;