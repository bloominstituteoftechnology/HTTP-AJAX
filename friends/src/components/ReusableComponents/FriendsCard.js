import styled from 'styled-components';
import { Card, Input, Button } from 'reactstrap';

export const CardsContainer = styled.div`
    display: flex; 
    flex-flow: wrap;

`

export const CardContainer = styled(Card)`
    margin: 20px;
    width: 340px;
    text-align: center;
`

export const EditInputField = styled(Input)`
    margin: 20px auto;
    margin-bottom: 0;
    width: 90%;
    
    &:first-child {
        margin-top: 0;
    }
`

export const EditButtons = styled(Button)`
    width: 45%;
    margin: 20px 10px;
`