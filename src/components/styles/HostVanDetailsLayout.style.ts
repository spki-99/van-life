import { styled } from 'styled-components';

export const PageContainer = styled.section`
    padding: 0 27px 45px;
`

export const DetailsContainer = styled.section`
    padding: 25px;
    background-color: white;
    border-radius: 6px;
    margin-top: 37px;

    img { 
        max-width: 157px;
        border-radius: 5px;
        margin-bottom: 27px;
    }

    h3 {
        margin-top: 16px;
    }
`
export const TopContainer = styled.section`
    display: flex;
    align-items: center;
`
export const TopColumnContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    align-items: start;
`