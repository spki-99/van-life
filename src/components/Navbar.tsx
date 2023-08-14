import { StyledNavbar, StyledHomeLink, StyledLink, StyledLinksContainer } from './styles/Navbar.style';

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
            </StyledLinksContainer>
        </StyledNavbar>
    )
}

export default Navbar;
