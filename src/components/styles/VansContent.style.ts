import { styled } from 'styled-components';

export const StyledVansContent = styled.div`
    padding: 54px 27px 83px;
    background-color: #FFF7ED;

    h2 {
        font-weight: bold;
        font-size: 32px;
        color: #161616;
        margin-bottom: 22px;
    }
`

export const StyledFiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 14px;
    
    button {
        color: #4D4D4D;
        font-weight: 500;
        font-size: 16px;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-decoration: underline;
    }
`

export const StyledFilters = styled(StyledFiltersContainer)`
    gap: 20px;

    button {
        background-color: #FFEAD0;
        padding: 6px 26px;
        text-decoration: none;
        border-radius: 5px;
    }
`

export const StyledCardsContainer = styled.div`
    margin-top: 55px;
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    flex-wrap: wrap;
    display: flex;
    gap: 34px;
`