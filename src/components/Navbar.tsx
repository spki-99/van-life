import { StyledNavbar, StyledHomeLink, StyledLink } from './styles/Navbar.style';

interface NavbarProps {
    currentPage: string;
}

const Navbar = (props: NavbarProps) => {
    return (
        <StyledNavbar>
            <StyledHomeLink to='/'>#VANLIFE</StyledHomeLink>
            <div>
                <StyledLink 
                    to='/about' 
                    selected={props.currentPage === 'about'}
                    >
                        About
                </StyledLink>
                <StyledLink
                    to='/vans'
                    selected={props.currentPage === 'vans'}>
                        Vans
                </StyledLink>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
