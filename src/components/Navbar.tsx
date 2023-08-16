import { StyledNavbar, StyledHomeLink, StyledLink, StyledLinksContainer, StyledUserLink } from './styles/Navbar.style';
import imageUrl from '/src/assets/user-circle.png'

export const activeStyle = {
    color: '#161616',
    textDecoration: 'underline'
}

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledHomeLink to='.'>#VANLIFE</StyledHomeLink>
            <StyledLinksContainer>
                <StyledLink
                    to='host'
                    style={({isActive})=> isActive ? activeStyle : {} }>
                        Host
                </StyledLink>
                <StyledLink 
                    to='about' 
                    style={({isActive})=> isActive ? activeStyle : {} }>
                        About
                </StyledLink>
                <StyledLink
                    to='vans'
                    style={({isActive})=> isActive ? activeStyle : {} }>
                        Vans
                </StyledLink>
                <StyledUserLink to='login'>
                    <img src={imageUrl}/>
                </StyledUserLink>
            </StyledLinksContainer>
        </StyledNavbar>
    )
}

export default Navbar;
