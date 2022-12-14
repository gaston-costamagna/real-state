import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import bars from '../../Images/bars.svg';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;

`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

export const NavLogo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen  and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuBar = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    background-image: url(${bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    top: 0;
    right: 0;
    position: absolute;
    transform: translate(-50%, 25%);
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen  and (max-width: 768px) {
    display: none;
  }
` 