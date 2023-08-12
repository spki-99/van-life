import { StyledVansContent, StyledFiltersContainer, StyledFilters, StyledCardsContainer } from './styles/VansContent.style';
import VanCard from '../components/VanCard';
import { Van } from '../pages/Vans';

interface VansContentProps {
    vans: Van[]
}

const VansContent = (props: VansContentProps) => {
    const vanCards = props.vans.map((van, index) => <VanCard key={index} van={van}/>);

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

export default VansContent;