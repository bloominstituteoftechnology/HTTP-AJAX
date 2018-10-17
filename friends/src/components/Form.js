import React from 'react';
import {Button, Formdiv, Input} from './Styled-components.js'
import Styled from 'styled-components';

const Fieldwrap = Styled.div`
    margin-top : 20px;
`;

const Form = (props) => {
    return (
        <Formdiv>
            <form>
                    <Fieldwrap>
                        <label>Name : </label>
                        <Input 
                            type = "text"
                            name = "name"
                            value = ""
                            onChange = {props.changeHandler}                            
                        />
                    </Fieldwrap>
     
                    <Fieldwrap>
                        <label>Age : </label>
                        <Input 
                            type = "text"
                            name = "age"
                            value = ""
                            onChange = {props.changeHandler}
                        />
                    </Fieldwrap>

                    <Fieldwrap>
                        <label>Email : </label>
                        <Input 
                           type = "text"
                           name = "email"
                           value = ""
                           onChange = {props.changeHandler} 
                        />
                    </Fieldwrap>
                   
                    <Button > 
                        Add 
                    </Button>
                </form>
        </Formdiv>
    )
}

export default Form;