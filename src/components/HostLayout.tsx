import { StyledLink } from './styles/Navbar.style';
import { Outlet } from 'react-router-dom';
import { HostNavbar } from './styles/HostLayout.style';
import { StyledLinksContainer } from './styles/Navbar.style';
import { activeStyle } from './Navbar';

const HostLayout = () => {
    return (
        <>
            <HostNavbar>
                <StyledLinksContainer>
                    <StyledLink
                        to='.'
                        end
                        style={({isActive})=> isActive ? activeStyle : {} }>
                            Dashboard
                    </StyledLink>
                    <StyledLink
                        to='income'
                        style={({isActive})=> isActive ? activeStyle : {} }>
                            Income
                    </StyledLink>
                    <StyledLink
                        to='vans'
                        style={({isActive})=> isActive ? activeStyle : {} }>
                            Vans
                    </StyledLink>
                    <StyledLink
                        to='reviews'
                        style={({isActive})=> isActive ? activeStyle : {} }>
                         Reviews
                    </StyledLink>
                </StyledLinksContainer>
            </HostNavbar>
            <Outlet />
        </>
    )
}

export default HostLayout;