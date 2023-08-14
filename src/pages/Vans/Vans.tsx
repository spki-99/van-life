import { useState, useEffect } from 'react';
import { StyledVansContent, StyledFiltersContainer, StyledFilters, StyledCardsContainer } from '../../components/styles/Vans.style';
import Van from '../../business-objects/Van';
import VanCard from '../../components/VanCard';

const Vans = () => {
    const [vans , setVans] = useState<Van[]>([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => { setVans(data.vans) });
    }, []);
    
    const vanCards = vans.map(van => <VanCard key={van.id} van={van}/>);

    return (
        <StyledVansContent>
            <h2>Explore our van options</h2>
            <StyledFiltersContainer>
                <StyledFilters>
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                </StyledFilters>
                <button>Clear filters</button>
            </StyledFiltersContainer>
            <StyledCardsContainer>
                {vanCards}
            </StyledCardsContainer>
        </StyledVansContent>
    )
}

export default Vans;