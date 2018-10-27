import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                        <span onClick={this.props.deleteHandler(this.props.id)}>Delete</span>
                    </FriendDiv>

                    <FriendDiv>
                        <StyledLink to={`/friends/${this.props.id}`} >
                            <span>{this.props.name}</span>
                        </StyledLink>
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
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    width: 100%;
`



