import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: fixed;
  width:100%;
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

  
`
const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  padding:15px;
  background-color:white;

  @media only screen and (max-width: 1440px) {
    font-size: 15px;
    padding:13px;
  }
`
const NavigationList = styled.ul`
  padding:15px;
  list-style: none;
  display: flex;
  background-color: black;

  @media only screen and (max-width: 1440px) {
    padding:13px;
  }
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin:0 16px;
  color:white;

  @media only screen and (max-width: 1440px) {
    font-size: 13px;
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">#100daysChallenge</Link>
    </Logo>
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
