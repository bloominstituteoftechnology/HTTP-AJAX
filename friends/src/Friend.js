import React, { Component } from 'react'
import './App.css'

class Friend extends Component {
    constructor () {
        super () 
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
    
    cancel=() => {
        this.setState({
            inputShow: false
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        const {id, name, age, email } = this.props
        return (
            this.state.inputShow
            ? <form onSubmit={(event) => this.props.update(event, id, {id: id, name: this.state.name, age: Number(this.state.age), email: this.state.email })}>
            <div> 
              Name: <input name="name" type="text" value={this.state.name} placeholder={name} onChange={this.handleChange} />
            </div> 
            <div>
              Email: <input name="email" type="email" value={this.state.email} placeholder={email} onChange={this.handleChange} />
            </div> 
            <div>
              Age: <input name="age" type="number" min="1" value={this.state.age} placeholder={email} onChange={this.handleChange} />
            </div>
            <button onClick={this.cancel}>Cancel</button>
            <input className='submit' type="submit" value="Save" />
          </form> 
          : <div className='friends'>
                <span>{id}</span>
                <span>{name}</span>
                <span>{age}</span>
                <span>{email}</span>
                <button onClick={this.update}>Update</button>
                <button onClick={() => this.props.delete(id)}>Delete</button>
            </div>
        )
    }
}

export default Friend

