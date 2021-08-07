import React, { useState} from "react";
import styled from "styled-components";
import Typical from "react-typical";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        <Typical
          steps={["Mateus", 1000, "Marinho.", 4000]}
          loop={Infinity}
          wrapper="yes"
        />
      </Logo>
      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <Menu isOpen={isOpen}>
        <MenuLink href="#projects">Projects</MenuLink>
        <MenuLink href="#contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.background1};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Hamburguer = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${props => props.theme.colors.text};
    margin: 4px;
    border-radius: 5px;
  }

  @media (max-width: 860px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 860px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height: 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    color: #FFA48E
  }
`;

const Logo = styled.a`
  
  padding: 1rem 0;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 800;
  font-size: 1.7rem;
`;

export default NavBar;
