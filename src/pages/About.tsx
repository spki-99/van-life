import { StyledAboutContainer, StyledAboutExploreContainer, StyledAboutImage, StyledExploreVansLink} from "../components/styles/About.style";
import backgroundImage from '../assets/about-background.svg'

const About = () => {
    return (
        <div>
            <StyledAboutImage src={backgroundImage}/>
            <StyledAboutContainer>
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. 
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)<br/><br/>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </StyledAboutContainer>
            <StyledAboutExploreContainer>
                <h2>
                    Your destination is waiting. <br/>
                    Your van is ready.
                </h2>
                <StyledExploreVansLink to='/vans'>Explore our vans</StyledExploreVansLink>
            </StyledAboutExploreContainer>
        </div>
    )
}

export default About;