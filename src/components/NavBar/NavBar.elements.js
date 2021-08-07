import { Container } from "../../lib/GlobalStyles";
import styled from "styled-components";

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  ${Container}
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background1};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Hamburguer = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${(props) => props.theme.colors.text};
    margin: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1060px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .about {
    margin-right: 300px;

    @media (max-width: 1060px) {
        margin: 0 auto;
    }
  }

  .contact {
    //border: 3px solid ${(props) => props.theme.colors.secondary1};
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.primary1};
    border-radius: 25px;
    display: block;
    padding: 12px;
    font-weight: bold;

    &:hover {
      background-color: #ffa48e;
      color: ${(props) => props.theme.colors.primary1};
    }

    @media (max-width: 1060px) {
        margin-bottom: 0.9rem;
    }
  }

  @media (max-width: 1060px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    color: #ffa48e;
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: 800;
  font-size: 1.7rem;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
