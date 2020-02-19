import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: fixed;
  height: 100%;
  background-color: #F0F0F3;
  top:0;
  left:0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  
  font-family: "Montserrat";
  z-index: 1000;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  /*position: fixed;
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
  }*/
`
const NavigationList = styled.ul`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  list-style: none;
  display: flex;
`

const NavigationListItem = styled.li`
background-color: #F0F0F3;
  font-weight: 600;
  font-size: 15px;
  margin:30px 10px;
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
`


const HamburgerMenu = () => (
    <NavigationWrapper>
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
);

export default HamburgerMenu