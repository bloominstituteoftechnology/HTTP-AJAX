import React from 'react'

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', age: '', email: '' }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
      e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.nameBox} onChange={this.handleChange} />
                </label>
                <label>
                    Age:
                    <input name="age" type="text" value={this.state.ageBox} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input name="email" type="text" email={this.state.emailBox} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
