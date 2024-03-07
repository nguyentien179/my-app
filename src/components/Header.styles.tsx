import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff; // Adjust the color to match your design
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow
`;

export const Logo = styled.img`
  height: 50px; // Adjust the size to match your design
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin-right: 1rem; // Space between links
  color: #333; // Adjust the color to match your design
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const LanguageSelector = styled.select`
  padding: 0.5rem;
  margin-right: 1rem;
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #017501; // Your button color
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005800; // Slightly darker variant for hover state
  }
`;