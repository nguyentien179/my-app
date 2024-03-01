import styled from 'styled-components';

export const LoginPageContainer =  styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

export const LoginFormContainer = styled.div`
    width: 350px; // Adjust the width according to your design
    padding: 2rem;
    margin-left: auto;
    background: rgba(0, 0, 0, 0.75); // This gives a semi-transparent background
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
`;
export const ImageContainer = styled.div`
    background-image: url('/assets/login.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    width: 50%; // Take up half of the container width
    height: 100vh;
    flex-shrink: 0;
`
export const Logo = styled.img`
    display: block;
    margin: 0 auto 2rem auto; // Center the logo and add some margin at the bottom
    height: 50px; // Adjust based on your logo's design
    width: 50px
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #0f0; // Or your theme's focus color
  }
`;

export const Label = styled.label`
  color: white;
  display: block;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RememberMeCheckbox = styled.input`
  color: #fff;
  margin-right: 5px;
`;

export const ForgotPasswordLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #1bca00
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #017501; // Your button color
  color: white;
  padding: 14px 20px;
  margin: 24px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005800; // Slightly darker variant for hover state
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
  margin: 20px 0;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // Space between icons
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

