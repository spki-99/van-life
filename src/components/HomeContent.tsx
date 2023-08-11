import { StyledHomeContent, StyledHomeVansLink } from './styles/HomeContent.style';

const HomeContent = () => {
    return (
        <StyledHomeContent>
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <StyledHomeVansLink to='/vans'>Find your van</StyledHomeVansLink>
        </StyledHomeContent>
    )
}

export default HomeContent;