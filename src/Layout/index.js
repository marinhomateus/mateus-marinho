import React from "react";

//import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import { Container } from "../lib/GlobalStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;