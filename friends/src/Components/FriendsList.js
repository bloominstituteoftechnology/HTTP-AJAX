import React, { Component } from 'react';
import FriendsForm from './FriendsForm';
import shortid from 'shortid';
import styled from 'styled-components';
import Friend from './Friend'

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 745px;
    padding-left: 0;
    li {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0;
        form {
            width: 100%;
            display: flex;
            ul {
                background: #fff;
                width: 100%;
                display: flex;
                border: solid rgba(0, 0, 0, 0.1) 1px;
                border-radius: 10px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                    0 6px 6px rgba(0, 0, 0, 0.23);
                li {
                    display: flex;
                    width: calc(100% / 3);
                    justify-content: flex-start;
                    padding: 10px;
                    border-radius: 0px;
                    input {
                        &:disabled {
                            background: white;
                            border: none;
                            color: black;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
`;

class FriendsList extends Component {
    constructor(props) {
        super()
        this.props = props
    }



    render() {
        return (
            <Div>
                <FriendsForm handleChange={this.props.handleChange} submit={this.props.submit} />
                <Ul>
                    {this.props.friends.map(friend => (
                        <Friend friend={friend} key={shortid.generate()} />
                    ))}
                </Ul>
            </Div >
        );
    }
};

export default FriendsList;
