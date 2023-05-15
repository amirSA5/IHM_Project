import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';



const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;

`;


const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        text-decoration: none;
    }
`

const StyledLink = styled(Link)`
    position: relative;
    padding: 20px;
    color: #000;
    text-decoration: none;
    transition: background 0.2s ease-in-out;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover::after {
        visibility: visible;
        transform: scaleX(1);
       
    }
    &:hover {
        background: #b2cfdd;
        color: #fff;
        
    }
`;


const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');

    return (
        <Component>
            <Container>
                <StyledLink to='/'>HOME</StyledLink>
                <StyledLink to='/about'>ABOUT</StyledLink>
                <StyledLink to='/contact'>CONTACT</StyledLink>
                <StyledLink to ='/profile'>PROFILE</StyledLink>
                <StyledLink to='/account'>LOGOUT</StyledLink>
            </Container>
        </Component>
    )
}

export default Header;
