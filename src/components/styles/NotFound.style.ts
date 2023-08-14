import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    margin: 105px 27px;

    h1 {
        font-size: 32px;
    }
`

export const BackButton = styled(Link)`
    border: 0;
    font-size: 18;
    font-weight: bold;
    color: white;
    background-color: #161616;
    display: block;
    padding: 12px;
    margin-top: 30px;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
`

