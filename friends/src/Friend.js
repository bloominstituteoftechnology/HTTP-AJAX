import React from 'react'

class Friend extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email:this.state.email
        }
            const id = this.props.friends.id;
        this.props.update(id,friend)
        event.target.reset();
        console.log(friend,id)
    }

    render() {
        console.log(this.props)
        return (
            <div className="cta">
                <div>
                    <p className="text">
                        Name: {this.props.friends.name}<br />
                        Age: {this.props.friends.age}yrs<br />
                        Email: {this.props.friends.email}<br />
                    </p>
                    <button onClick={() => this.props.delete(this.props.friends.id)}>Delete Friend</button>
                </div>
                <div>
                    <form onSubmit={this.handleUpdateSubmit}>
                        Name: <input onChange={this.changeHandler} name="name" type="text" /><br />
                        Age: <input onChange={this.changeHandler} name="age" type="text" /><br />
                        Email: <input onChange={this.changeHandler} name="email" type="text" /><br />
                        <input type="submit" value="Update Friend" />

                    </form>
                </div>
            </div>
        );
    }
}

export default Friend