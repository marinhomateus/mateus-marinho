import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  Hamburguer,
  Menu,
  MenuLink,
} from "./NavBar.elements";
import Typical from "react-typical";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
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
          <MenuLink href="#technologies">Technologies</MenuLink>
          <MenuLink className="about" href="#about">About</MenuLink>
          <MenuLink href="#contact" className="contact">Contact</MenuLink>

        </Menu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
