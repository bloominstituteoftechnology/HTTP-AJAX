import React, { Component } from 'react'

class Loading extends Component {
    constructor(){
        super()
        this.state = {
            text: 'Loading'
        }
    }

    componentDidMount(){
        const stopperText = `${this.state.text}...`
        this.interval = window.setInterval(()=>{
            this.state.text === stopperText
                ? this.setState({text: 'Loading'})
                : this.setState((prevState) =>{
                    return {
                        text: prevState.text + '.'
                    }
                })
        }, 300)
    }

    componentWillUnmount(){
        window.clearInterval(this.interval)
    }

    render() {
        return (
        <div>
            {this.state.text}
        </div>
        )
    }
}

export default Loading;
