import React from 'react'
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }

    makeObject = () => {
        const { name, age, email } = this.state;
        const newObj = {
            id: this.props.id,
            name: name,
            age: age,
            email: email
        }
        this.setState({ name: '', age: '', email: '' });
        return newObj;
    }

    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                {console.log(this.props)}
                <form onSubmit={this.addInput} >
                    Name:
                    <input className="input" name='name' value={this.state.name} onChange={this.updateInput} type="text" placeholder="Friend's Name Here" />
                    Age:
                    <input className="input" name='age' value={this.state.age} onChange={this.updateInput} type="number" placeholder="Friend's Age Here" />
                    E-mail:
                    <input className="input" name='email' value={this.state.email} onChange={this.updateInput} type="email" placeholder="Friend's Email Here" />
                </form>
                <button className="button button-add" onClick={() => this.props.addInput(this.makeObject())} > Add New Friend </button>
                <Link to="/" >
                    <button className="button button-return"> Return </button>
                </Link>
            </div>
        );
    }
};

export default FriendForm


