import React, { useState} from "react";
import styled from "styled-components";
import Typical from "react-typical";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo href="">
        <Typical
          steps={["Mateus", 1000, "Marinho.", 4000]}
          loop={Infinity}
          wrapper="yes"
        />
      </Logo>
      <Hamburguer onclick={() => setIsOpen (!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <Menu isOpen={isOpen}>
        <MenuLink href>Projects</MenuLink>
        <MenuLink href>Contact</MenuLink>
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
  background: #000000;
`;
const Hamburguer = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7e8ce0;
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
  color: #7e8ce0;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #FFA48E
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  color: #7e8ce0;
  font-weight: 800;
  font-size: 1.7rem;
`;

export default NavBar;
