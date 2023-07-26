import React from 'react'
import { menuIcon } from '../../helper/iconData'
import "./Navbar.style";
import { HamburgerIcon, Logo, MenuLink, Nav  } from './Navbar.style';


const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo>Clarus Library</Logo>
      <HamburgerIcon>
        {menuIcon}
      </HamburgerIcon>
      <MenuLink>Home</MenuLink>
    </Nav>
   
  )
}

export default Navbar