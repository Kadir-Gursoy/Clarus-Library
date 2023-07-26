import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../styles/Flex";



export const Nav = styled(Flex)`
background-color   :${({theme})=> theme.colors.navbarBgColor};
padding: 1rem 2rem;


`

export const Logo = styled(NavLink)`
padding: 1rem 0;
text-decoration: none;
font-weight:800;
font-size: 2rem;
color: ${({theme})=> theme.colors.logoColor};
&:hover {
    color: ${({theme})=> theme.colors.linkColor};
}

`

export const HamburgerIcon = styled.div`
`
export const Menu = styled(Flex)`

`

export const MenuLink =styled(NavLink)`
`