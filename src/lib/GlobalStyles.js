import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  padding-left: 50px;
  padding-right: 50px;
  margin: auto;

  @media (min-width: 860px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
