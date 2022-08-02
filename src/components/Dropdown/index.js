import React from 'react';
import { 
  DropdownContainer,
  Icon,
  CloseIcon,
  DropDownWrapper,
  DropdownLink,
  DropdownMenu,
  BtnWrap
 } from './DropdownElements';
import { Button } from '../Button/ButtonElements';
import { menuData } from '../../data/MenuData';


const Dropdown = ( {isOpen, toggle} ) => {
  return (
  <DropdownContainer onClick={toggle} isOpen={isOpen}>
    <Icon>
      <CloseIcon />
    </Icon>
    <DropDownWrapper>
      <DropdownMenu>
        {menuData.map((item, index) => (
          <DropdownLink to={item.Link} key={index}>
            { item.title }
          </DropdownLink>
        ))}
      </DropdownMenu>
      <BtnWrap>
        <Button primary='true' round='true' big='true' to='/contact'>Contact Us</Button>
      </BtnWrap>
    </DropDownWrapper>
  </DropdownContainer>
  )
}

export default Dropdown