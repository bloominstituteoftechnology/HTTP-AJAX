import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    max-width: 900px;
`;

export const FriendsHeader = styled.h1`
    background: #222;
    color: #FFF;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`;


export const FriendsContainer = styled.ul`
    list-style: none;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 0;
`;

export const ListItem = styled.li`
    border: 1px solid #222;
`;

export const LoadingText = styled.h1`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const FriendFormContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    margin: 15px auto;

        input {
            margin-right: 2%;
            outline: none;
        }
        label {
            margin-right: 1%;
        }
        button {
            text-decoration: none;
            cursor: pointer;


        }

`