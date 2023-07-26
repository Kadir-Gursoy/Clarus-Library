import React from 'react'
import { menuIcon } from '../../helper/iconData'

const Navbar = () => {
  return (
    <Nav>
      <Logo>Clarus Library</Logo>
      <HamburgerIcon>
        {menuIcon}
      </HamburgerIcon>
      <MenuLink>Home</MenuLink>
    </Nav>
   
  )
}

export default Navbar