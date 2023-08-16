import { StyledVansContent, StyledFiltersContainer, StyledFilters, StyledCardsContainer, StyledFilter, StyledClearFilters } from '../../components/styles/Vans.style';
import Van from '../../business-objects/Van';
import VanCard from '../../components/VanCard';
import { Await, useSearchParams, useLoaderData, defer } from 'react-router-dom';
import { getVans } from '../../api';
import { Suspense } from 'react';

export const loader = () => defer({ vans: getVans() });

const Vans = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const deferPromise = useLoaderData() as { vans: Promise<Van[]> };
    const typeFilter = queryParams.get('type');

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

    const renderVansContent = (vans: Van[]) => {
        const filteredVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans;
        const vanCards = filteredVans.map(van => <VanCard key={van.id} van={van} query={queryParams.toString()}/>);
        return (
            <>
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
                        {typeFilter && 
                        <StyledClearFilters 
                            onClick={() => onFilterClick('type', null)}>
                                Clear filters
                        </StyledClearFilters>}
                </StyledFiltersContainer>
                <StyledCardsContainer>
                    {vanCards}
                </StyledCardsContainer>
            </>
        )
    }


    return (
        <StyledVansContent>
            <h2>Explore our van options</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={deferPromise.vans}>
                    {renderVansContent}
                </Await>
            </Suspense>
        </StyledVansContent>
    )
}

export default Vans;