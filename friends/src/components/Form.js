import React, { Component } from 'react';
import Header from './Header';

class Form extends Component {
    render() {
        console.log(this.props.friends);
        return (
            <div>
               <Header /> 
               <form className="form">
                     
               </form> 
            </div>
        );
    }
}

export default Form;
