import React from 'react';
import { Nav, NavMenu, NavMenuBar, NavLogo, NavMenuLinks, NavBtn } from './NavbarElements';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button/ButtonElements';


const Navbar = ({toggle}) => {
  return (
    <Nav>
      <NavLogo to='/'>ELIXR</NavLogo>

      <NavMenuBar onClick={toggle} />
      
      <NavMenu>
        { menuData.map((item, index) => 
          <NavMenuLinks to={item.Link} key={index}>
            {item.title}
          </NavMenuLinks>
        )}
      </NavMenu> 

      <NavBtn>
        <Button to='/contact' primary='true'>Contact Us</Button>
      </NavBtn> 
    </Nav>
  )
}

export default Navbar;