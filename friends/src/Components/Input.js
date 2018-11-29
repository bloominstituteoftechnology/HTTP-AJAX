import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    input {
        font-size: 1rem;
        padding: 10px 0px 10px 0px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #757575;
        background-color: rgba(0, 0, 0, 0);
        margin: 0;
        &:focus {
            outline: none;
        }
        &:focus ~ label,
        input:valid ~ label {
            top: -20px;
            font-size: 14px;
            color: #5264ae;
        }
        &:focus ~ .bar:before,
        &:focus ~ .bar:after {
            width: 50%;
        }
        &:focus ~ .highlight {
            animation: inputHighlighter 0.3s ease;
        }
    }
    .highlight {
        position: absolute;
        height: 60%;
        width: 50%;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }
    .bar {
        position: relative;
        display: block;
        width: 100%;
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
    @keyframes inputHighlighter {
        from {
            background: #5264ae;
        }
        to {
            width: 0;
            background: transparent;
        }
    }
`;

const Input = props => {
    return (
        <Div>
            <input type={props.type} name={props.name} value={props.value} onChange={props.handleChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>{props.placeholder}</label>
        </Div>
    );
};

export default Input;
