import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const FriendsHeader = styled.h1`
    background: #576066;
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

    ${props => (String(props.color % 2) === '0' ? `background: #C1DFF0;` : `background: #88CCF1;`)}
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
    margin: 0 auto;
    background: #576066;
    padding: 15px 0;
    color: #FFF;

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
            background: #C9C5BA;
            border: 1px solid #222;
            padding: 5px 10px;
            font-weight: bold;


        }

`