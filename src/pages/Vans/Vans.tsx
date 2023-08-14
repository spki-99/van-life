import { useState, useEffect } from 'react';
import { StyledVansContent, StyledFiltersContainer, StyledFilters, StyledCardsContainer, StyledFilter, StyledClearFilters } from '../../components/styles/Vans.style';
import Van from '../../business-objects/Van';
import VanCard from '../../components/VanCard';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';

export const loader = () => getVans();
const Vans = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const vans = useLoaderData() as Van[];

    const typeFilter = queryParams.get('type');
    const filteredVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans;
    const vanCards = filteredVans.map(van => <VanCard key={van.id} van={van} query={queryParams.toString()}/>);

    const onFilterClick = (key: string, value: string | null) => {
        setQueryParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            }
            else { 
                prevParams.set(key, value)
            }
            return prevParams;
        })
    }

    return (
        <StyledVansContent>
            <h2>Explore our van options</h2>
            <StyledFiltersContainer>
                <StyledFilters>
                  <StyledFilter
                        type='simple'
                        selected={typeFilter === 'simple'}
                        onClick={() => onFilterClick('type', 'simple')}>
                            Simple
                        </StyledFilter>
                    <StyledFilter
                    type='luxury'
                    selected={typeFilter === 'luxury'}
                    onClick={() => onFilterClick('type', 'luxury')}>
                        Luxury
                    </StyledFilter>
                    <StyledFilter
                    type='rugged'
                    selected={typeFilter === 'rugged'}
                    onClick={() => onFilterClick('type', 'rugged')}>
                        Rugged
                    </StyledFilter>
                </StyledFilters>
                {typeFilter && <StyledClearFilters 
                    onClick={() => onFilterClick('type', null)}>
                        Clear filters
                </StyledClearFilters>}
            </StyledFiltersContainer>
            <StyledCardsContainer>
                {vanCards}
            </StyledCardsContainer>
        </StyledVansContent>
    )
}

export default Vans;