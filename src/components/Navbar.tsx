import { StyledNavbar, StyledHomeLink, StyledLink } from './styles/Navbar.style';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPage = location.pathname.split('/')[1];

    return (
        <StyledNavbar>
            <StyledHomeLink to='/'>#VANLIFE</StyledHomeLink>
            <div>
                <StyledLink 
                    to='/about' 
                    selected={currentPage === 'about'}
                    >
                        About
                </StyledLink>
                <StyledLink
                    to='/vans'
                    selected={currentPage === 'vans'}>
                        Vans
                </StyledLink>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
