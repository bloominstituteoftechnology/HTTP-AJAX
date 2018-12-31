import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            nameInput: this.props.name,
            ageInput: this.props.age,
            emailInput: this.props.email,
        };
    }
    handleInput = (e, type) => {
        const key = type + 'Input';
        this.setState({ [key]: e.target.value });
    }
    handleEdit = (e) => {
        e.preventDefault();
        if (!this.state.nameInput || !this.state.ageInput || !this.state.emailInput) return alert('Please fill out all fields');
        this.props.handleUpdate(this.state.nameInput, this.state.ageInput, this.state.emailInput, this.props.id);
        this.setState({
            editing: false,
        });
    }
    render(){
        return this.state.editing ? (
            <form onSubmit={this.handleEdit}>
                <p>
                    <span>Name:</span> 
                    <input type="text" 
                        placeholder="Name" 
                        value={this.state.nameInput} 
                        onChange={(e) => this.handleInput(e, 'name')} 
                    />
                </p>
                <p>
                    <span>Age:</span> 
                    <input type="number" 
                        placeholder="Age" 
                        value={this.state.ageInput} 
                        onChange={(e) => this.handleInput(e, 'age')}  
                    />
                </p>
                <p>
                    <span>Email:</span> 
                    <input type="email" 
                        placeholder="Email" 
                        value={this.state.emailInput} 
                        onChange={(e) => this.handleInput(e, 'email')}  
                    />
                </p>
                <button>Modify</button>
                <div className="icons">
                    <span className="fas fa-undo-alt edit" onClick={() => this.setState({ editing: false })}></span>
                    <span className="fas fa-times-circle delete" onClick={ () => this.props.deleteFriend(this.props.id)}></span>    
                </div>
            </form>
        ) : (
            <div>
                <p><span>Name:</span> {this.props.name}</p>
                <p><span>Age:</span> {this.props.age}</p>
                <p><span>Email:</span> {this.props.email}</p>
                <div className="icons">
                    <span className="fas fa-user-edit edit" onClick={ () => this.setState({ editing: true })}></span>
                    <span className="fas fa-times-circle delete" onClick={() => this.props.deleteFriend(this.props.id)}></span>
                </div>
            </div>
        );
    }
}

export default Friend;