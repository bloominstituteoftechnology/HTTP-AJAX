import React, {Component} from 'react';
import axios from 'axios';


export default class friends extends Component{
    constructor(props){
        super(props);
            this.state = {
                friends: this.props.friends,
            };
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState((state) => ({
            friends: newProps.friends,
        }))

    }
    render() {
        return(
            <div>

            </div>
        )
    }