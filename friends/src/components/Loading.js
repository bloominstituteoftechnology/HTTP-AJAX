import React, { Component } from 'react'
import { LoadingText } from './styledComponents';

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
            <LoadingText>{this.state.text}</LoadingText>
        </div>
        )
    }
}

export default Loading;
