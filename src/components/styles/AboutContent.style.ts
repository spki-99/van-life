import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledAboutImage = styled.img`
    width: 100%;
`

export const StyledAboutContainer = styled.div`
    padding: 49px 27px 53px;
    background-color: #FFF7ED;
    color: #161616;

    h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 31px;
    }
`

export const StyledAboutExploreContainer = styled.div`
    background-color: #FFCC8D;
    padding: 32px 38px;

    h2 {
        font-weight: bold;
        font-size: 24px;
    }
`
export const StyledExploreVansLink = styled(Link)`
    margin-top: 25px;
    display: inline-block;
    text-decoration: none;
    border: 0;
    border-radius: 10px;
    background-color: #161616;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 22px;
`