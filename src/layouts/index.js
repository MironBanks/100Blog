import React from "react"
import Navigation from "../components/Navigation/Navigation";
import GlobalStyle from "../assets/styles/globalStyles";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <HamburgerMenu />
    {children}
  </>
)

export default MainLayout;

