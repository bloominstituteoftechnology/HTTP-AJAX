import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
                <FriendContainer>
                    <FriendDiv>
                        <span>{this.props.name}</span>
                    </FriendDiv>
                    <FriendDiv>
                        <span>{this.props.age}</span>
                    </FriendDiv>
                    <FriendDiv>
                        <span>{this.props.email}</span>
                    </FriendDiv>
                </FriendContainer>
        )
    }
};

export default FriendsList;






const FriendContainer = styled.div`
    width: 800px;
    display: flex;
    border: 1px solid grey;
    margin: auto;
    height: 40px;
`;

const FriendDiv = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



