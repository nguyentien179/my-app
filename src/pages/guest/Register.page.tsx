import React, { useState } from 'react';
import { LoginPageContainer, RegImageContainer, LoginFormContainer, Logo, Label, Input, SubmitButton, Divider, SocialIconsContainer, FooterLinksContainer, FooterLink, SignUpLink, SignUpText } from '../../components/Login.styles';
import logo from '../../assets/logo.png'

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle form validation and submission here
    };
  
    return (
      <LoginPageContainer>
        <RegImageContainer />
        <LoginFormContainer>
            <Logo src={logo} alt="Logo" /> {/* Replace with your logo path */}
              <form>
                <Label htmlFor="fullName">Full Name</Label>
                <Input type="fullName" id="fullName" name="fullName" placeholder="" required />                    
                <Label htmlFor="email">Email address</Label>
                <Input type="email" id="email" name="email" placeholder="" required />

                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="" required />
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input type="password" id="confirmPassword" name="confirmPassword" placeholder="" required />

                <SubmitButton type="submit">Create Account</SubmitButton>

              </form>
              <SignUpText>Have an account?</SignUpText>
              <SignUpLink href="/login">Sign in</SignUpLink>
            <FooterLinksContainer>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinksContainer>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  };
  
  export default Register;