import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginPageContainer, RegImageContainer, LoginFormContainer, Logo, Label, Input, SubmitButton, Divider, SocialIconsContainer, FooterLinksContainer, FooterLink } from '../components/Login.styles';

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
            <Logo src="../assets/logo.jpg" alt="Logo" /> {/* Replace with your logo path */}
                <form>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input type="fullName" id="fullName" name="fullName" placeholder="Enter full name" required />                    
                    <Label htmlFor="email">Email address</Label>
                    <Input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" placeholder="Enter your password" required />
                    <Label htmlFor="confirmPassword">Password Again</Label>
                    <Input type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Enter your password again" required />

                    <SubmitButton type="submit">Create Account</SubmitButton>

                    <Divider />

                    <SocialIconsContainer>
                        <img src="/path-to-facebook-icon.png" alt="Facebook" />
                        <img src="/path-to-google-icon.png" alt="Google" />
                        <img src="/path-to-twitter-icon.png" alt="Twitter" />
                    </SocialIconsContainer>
                </form>

        <FooterLinksContainer>
            <FooterLink as={Link} to="../login">Sign in</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
        </FooterLinksContainer>
        </LoginFormContainer>
      </LoginPageContainer>
      // <div>
      //   <form onSubmit={handleSubmit}>
      //     <StyledInput
      //       type="text"
      //       name="fullName"
      //       placeholder="Full name"
      //       value={formData.fullName}
      //       onChange={handleChange}
      //     />
      //     <StyledInput
      //       type="email"
      //       name="email"
      //       placeholder="Email address"
      //       value={formData.email}
      //       onChange={handleChange}
      //     />
      //     <StyledInput
      //       type="password"
      //       name="password"
      //       placeholder="Password"
      //       value={formData.password}
      //       onChange={handleChange}
      //     />
      //     <StyledInput
      //       type="password"
      //       name="confirmPassword"
      //       placeholder="Confirm Password"
      //       value={formData.confirmPassword}
      //       onChange={handleChange}
      //     />
      //     <Button type="submit">Sign Up</Button>
      //   </form>
      // </div>
    );
  };
  
  export default Register;