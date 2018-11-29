import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
	border: 1px solid #f1f7ed;
	border-radius: 5px;
	width: 35%;
	padding: 5%;
	margin: 1%;
	background: #bea8aa;
`;
const H1 = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	color: #f1f7ed;
	font-family: cursive;
	margin-bottom: 5%;
	text-align: center;
`;
const H2 = styled.h2`
	font-size: 1.2rem;
	color: #272932;
	margin: 5% 0;
	font-weight: bold;
	text-align: center;
`;

const Button = styled.button`
	border: 1px solid #f1f7ed;
	border-radius: 50%;
	width: 20px;
	background: #272932;
	color: #f1f7ed;
	border: none;
`;
class Friend extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    render(){
        return(
            <React.Fragment>
            {this.props.data.map((friend, index) => 
                friend.id === this.state.id ? (
                    <Section key={index}>
                        <H1>{friend.name}</H1>
                        <H2>Age: {friend.age}</H2>
                        <H2>Email: {friend.email}</H2>
                    </Section>
                ) : null
            )}
            </React.Fragment>
        );
    }
}

export default Friend