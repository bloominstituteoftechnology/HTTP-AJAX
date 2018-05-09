import React, {Component} from 'react';

const Form = (props) => {
        return (
        <form>
            <input className="form" type="text" placeholder="Name" />
            <input className="form" type="text" placeholder="Age" />
            <input className="form" type="text" placeholder="Email" />   
        </form>    
    );
}

export default Form;