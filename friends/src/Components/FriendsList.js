import React from 'react';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputShow: false,
          name: '',
          age: '',
          email: ''
        }
    }


update = () => {
    this.setState({
        inputShow: true
    })
}

cancel = () => {
    this.setState({
        inputShow: false
    })
}

handleChange = (event) => {
    this.setState ({ [event.target.name]: event.target.value})
}

render() {
    const {id, name, age, email } = this.props
    return (
        this.state.inputShow
        ?
        <form onSubmit={(event) => this.props.update(event, id, {id: id, name: this.state.name, age: Number(this.state.age), email: this.state.email })} className='Update-Friend-Form'>
        <input name='name' type='text' value={this.state.name} placeholder='update name' onChange={this.handleChange} />
        <input name='age' type='number' value={this.state.age} placeholder='update age' onChange={this.handleChange} />
        <input name='email' type='email' value={this.state.email} placeholder='update email' onChange={this.handleChange} />
        <button onClick={this.cancel}>Cancel</button>
            <input className='submit' type="submit" value="Save" />
        </form>

           : <div>
                <span>ID: {id}</span>
               <span> Name: {name}</span>
               <span> Age: {age}</span>
               <span> Email: {email}</span>
               <button onClick={ this.props.delete(id)}>Delete </button>
               <button onClick={ this.update}>Update </button>
             </div>
        )
    };
 };
 export default FriendsList;
