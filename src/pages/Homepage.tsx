import React from "react";
import styled from "styled-components";
import { HeaderContainer, Logo, Nav, NavLink, LanguageSelector, LoginButton } from "../components/Header.styles";
const Header = () => {
    return (
      <HeaderContainer>
        <Logo src="path-to-your-logo.svg" alt="Website logo" />
        <Nav>
          <NavLink href="#">Newsfeed</NavLink>
          <NavLink href="#">Contact</NavLink>
          {/* Add more navigation links if needed */}
        </Nav>
        <div>
          <LanguageSelector>
            <option value="en">English</option>
            <option value="es">Español</option>
            {/* Add more languages as needed */}
          </LanguageSelector>
          <LoginButton>Login</LoginButton>
        </div>
      </HeaderContainer>
    );
  };
  
  export default Header;