import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    margin-bottom: 45px;
    input {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 300px;
        border: none;
        border-bottom: 1px solid #757575;
        &:focus {
            outline: none;
        }
        &:focus ~ label,
        input:valid ~ label {
            top: -20px;
            font-size: 14px;
            color: #5264ae;
        }
        &:focus ~ Bar:before,
        input:focus ~ Bar:after {
            width: 50%;
        }
    }
    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
    }
`;
const Highlight = styled.span``;
const Bar = styled.span`
    position: relative;
    display: block;
    width: 300px;
    &:before,
    &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.2s ease all;
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
`;

const Input = props => {
    return (
        <Div>
            <input type={props.type} />
            <Highlight />
            <Bar />
            <label>{props.placeholder}</label>
        </Div>
    );
};

export default Input;
