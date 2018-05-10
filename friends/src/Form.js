import React from 'react';

const Form = () => {
    return(
        <div>
            <input type="text" placeholder=" Name " name="name" onChange={this.handleChange} value={this.state.name} />
            <input type="number" placeholder=" Age " name="age" onChange={this.handleChange} value={this.state.age} />
            <input type="text" placeholder=" Email " name="email" onChange={this.handleChange} value={this.state.email} />
        </div>
    )             
}

export default Form;