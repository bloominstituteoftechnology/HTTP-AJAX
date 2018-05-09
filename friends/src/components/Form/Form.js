import React from "react";
import './Form.css';

const Form = props => {
    return (
        <form className="form">
            <input type="text" placeholder="name"/>
            <input type="age" placeholder="age"/>
            <input type="email" placeholder="email"/>
            <button onSubmit={''}>Submit</button>
        </form>
    );
}

export default Form;