import React from 'react';
import {Button} from 'reactstrap';
import Form from './Form';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            name: '',
            age: '',
            email: '',
            id: ''
        }
    }

    componentDidMount() {
        this.setState({name: this.props.friend.name, age: this.props.friend.age, email: this.props.friend.email, id: this.props.friend.id});
    }

    toggle = () => {
        this.setState({editing: !this.state.editing});
    }

    handleChanges = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    handleUpdate = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.state.name, this.state.age, this.state.email, this.state.id);
        this.toggle();

    }

    render() {
        if(this.state.editing) {
            return (
                <div className="friend-card">
                    <div className="button-container">
                        <Button className="cancel-button edit-button" onClick={() => this.toggle()} >Cancel</Button>
                    </div>
                    <form className="edit-form-container" onSubmit={this.handleUpdate}>
                        <div className="form-field edit-form">
                            <label>Name:</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
                        </div>
                        <div className="form-field edit-form">
                            <label>Age:</label>
                            <input type="text" name="age" value={this.state.age} onChange={this.handleChanges}/>
                        </div>
                        <div className="form-field edit-form">
                            <label>Email:</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChanges}/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="friend-card">
                    <div className="button-container">
                        <Button className="edit-button" onClick={this.toggle}>Edit</Button>
                        <Button className="delete-button" onClick={() => this.props.handleDelete(this.props.friend.id)}>{'x'}</Button>
                    </div>
                    
                    <h3>Name: {this.props.friend.name}</h3>
                    <p>Age: {this.props.friend.age}</p>
                    <p>Email: {this.props.friend.email}</p>
                </div>
            );
        }
    }
    
};

export default Friend;