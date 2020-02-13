import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: fixed;
  width:97%;
  top:20px;
  left:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat";

  a {
    text-decoration: none;
    color: inherit;
  }
`
const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`
const NavigationList = styled.ul`

  list-style: none;
  display: flex;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin:0 16px;
`

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">#100daysChallenge</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/projects">projects</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
