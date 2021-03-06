import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HamburgerToggleButton from "../HamburgerMenu/HamburgerToggleButton"

const NavigationWrapper = styled.nav`
  position: fixed;
  width:99%;
  top:20px;
  left:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat";
  z-index:20;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 1024px) {
    left: 0;
    top: 20px;
    padding:0 5px;
    width:100%;
  }

  
`
const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  padding:15px;
  background-color: #F0F0F3;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.0);

  &:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0 rgba(255,255,255,1),
                0.5px 0.5px 0 rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.01);
  }

  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 1440px) {
    font-size: 15px;
    padding:13px;
  }

  @media only screen and (max-width: 1024px) {
   font-size: 13px;
    padding:10px;
  }
`
const NavigationList = styled.ul`
  padding:15px;
  list-style: none;
  display: flex;
  

  @media only screen and (max-width: 1440px) {
    padding:13px;
  }

  @media only screen and (max-width: 1024px) {
    padding:10px;
  }
`

const NavigationListItem = styled.li`
background-color: #F0F0F3;
  font-weight: 600;
  font-size: 15px;
  margin:0 10px;
  color:black;
  width:130px;
  padding:15px;
  text-align:center;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.0);

  &:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0 rgba(255,255,255,1),
                0.5px 0.5px 0 rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.01);
  }

  @media only screen and (max-width: 1440px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 1024px) {
    padding:10px;
    margin:0 0 0 10px;
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">#100daysChallenge</Link>
    </Logo>
    <HamburgerToggleButton />
    <NavigationList>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/projects">projects</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
