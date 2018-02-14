import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const newFriendObj = {name: this.state.name, age: this.state.age, email: this.state.email};

        axios
            .post('http://localhost:5000/friends', newFriendObj)
            .then(response => {
                console.log('response from post', response);
                this.props.onCreate();
            })
            .catch(error => {
                console.error('error saving the data');
            });
    };

    handleChange = (event) => {

        // This is the same than those 3 lines below.
        const {name, value} = event.target;
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <li key="liKey" className="friend">
                    <form onSubmit={this.handleSubmit}>
                        <div className="friend-name">
                            Create New
                        </div>
                        <div className="friend-name">Name:
                            <input value={this.state.name} onChange={this.handleChange} name="name"  type="text" placeholder="name"/>
                        </div>
                        <div className="friend-age">Age:
                            <input value={this.state.age} onChange={this.handleChange} name="age"  type="number" placeholder="age"/>
                        </div>
                        <div className="friend-email">Email:
                            <input value={this.state.email} onChange={this.handleChange} name="email"  type="text" placeholder="email"/>
                        </div>
                        <input type="submit" value="Save" />
                    </form>
                </li>
            </div>
        );
    }
}

export default Form;