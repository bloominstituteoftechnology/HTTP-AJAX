import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
         
        }));
      }

      render() {
        console.log("button was clicked");
        return (
          <button onClick={this.handleClick}>
            Submit{}
          </button>
        );
      }
    
}

export default Button;