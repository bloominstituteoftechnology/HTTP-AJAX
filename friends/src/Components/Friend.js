import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'

const EnableEdit = styled.button`
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0;
    background: red;
    width: 70px;
`

const Submit = styled.button`
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0;
    background: limegreen;
    width: 70px;
`

class Friend extends Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            name: props.friend.name,
            age: props.friend.age,
            email: props.friend.email,
            disabled: true
        }
    }

    editEnabler = (e) => {
        e.preventDefault()
        this.setState({
            disabled: false
        })
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitEdit = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <li>
                <form onSubmit={event => this.props.submitEdit(event)}>
                    <ul>
                        <li><input name="name" value={this.state.name} disabled={this.state.disabled} onChange={(event) => this.changeHandler(event)} /></li>
                        <li><input name="age" value={this.state.age} disabled={this.state.disabled} onChange={(event) => this.changeHandler(event)} /></li>
                        <li><input name="email" value={this.state.email} disabled={this.state.disabled} onChange={(event) => this.changeHandler(event)} /></li>
                        {this.state.disabled ? <EnableEdit type="button" onClick={(event) => this.editEnabler(event)}>Edit</EnableEdit> : <Submit type="submit">Submit</Submit>}
                    </ul>
                </form>
            </li>
        )
    }
}

export default Friend