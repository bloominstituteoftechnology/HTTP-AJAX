import React from "react";
import './Form.css';

const Form = props => {

    return (
        <form className="form" id="addFriend">
            <input type="text" placeholder="name" name="text"required/>
            <input type="age" placeholder="age" name="age"required/>
            <input type="email" placeholder="email" name="email"required/>
            <button type="submit" value="Submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>
    );
}

export default Form;