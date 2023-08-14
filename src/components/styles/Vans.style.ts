import { styled } from 'styled-components';
import { getVanColor } from './VanCard.style';

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
`

export const StyledFilters = styled(StyledFiltersContainer)`
    gap: 20px;
`

export const StyledFilter = styled.button<{type: string, selected: boolean}>`
    background-color: ${({type, selected}) => selected ? getVanColor(type) : '#FFEAD0'};
    padding: 6px 26px;
    text-decoration: none;
    border-radius: 5px;
    color: ${({selected}) => selected ? '#FFEAD0' : '#4D4D4D'};
    border: 0;

    &:hover {
        background-color:${props => getVanColor(props.type)};
        color: #FFEAD0;
    }
`

export const StyledClearFilters = styled.button`
    color: #4D4D4D;
    border: 0;
    background-color: transparent;
    text-decoration: underline;
`

export const StyledCardsContainer = styled.div`
    margin-top: 55px;
    flex-wrap: wrap;
    display: flex;
    gap: 34px;
`