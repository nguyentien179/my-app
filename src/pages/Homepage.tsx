import React from "react";

import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  Select,
  Text,
  Spacer,
  Center,
} from '@chakra-ui/react';

export const Header = () => {

  return (
    <Flex as="header" align="center" padding="1rem" bg="white" boxShadow="sm" width="100%">
      <Box p="2">
        <Image src="path-to-your-logo.svg" alt="Website logo" boxSize="70px" ml="4"/>
      </Box>
      
      <Spacer /> {/* This pushes all elements to the right and left sides of the header */}
      
      <Flex alignItems="center" ml="auto">
      <Box display="flex" alignItems="center">
        {/* This container will group the navigation links, language selector, and login button */}
        
        <Link href="#" px="3" py="1" rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.100' }} mr={20}>
          Newsfeed
        </Link>
        <Link href="#" px="3" py="1" rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.100' }} mr={20}>
          Contact
        </Link>

        <Select placeholder="Language" width="auto" mr="20">
          <option value="en">English</option>
          <option value="es">Español</option>
          {/* More languages */}
        </Select>

        <Button bg="#426B1F" color="#FFF" variant="solid" size="lg" mr="4" _hover={{ bg:"#e0e0e0", color:"#426B1F" }}>Login</Button>
      </Box>
      </Flex>
    </Flex>
  );
};


export const Quote = () => {
  return (
    <Box as="section" bg="white.100" py={10}> {/* Adjust the background color and padding as needed */}
      <Center flexDirection="column" textAlign="center" px={4}> {/* Ensures the content is centered */}
        <Text fontSize="2xl" mb={4}> {/* Adjust the font size, margin, and weight as needed */}
          Push <em>harder</em> than yesterday<br /> if you want a <em>different</em> tomorrow.
        </Text>
        <Button bg="#426B1F" color="#FFF" variant="solid" size="lg"_hover={{ bg:"#e0e0e0", color:"#426B1F" }}> {/* Adjust the color scheme and size as needed */}
          Browse Newsfeed
        </Button>
      </Center>
    </Box>
  );
};

const Homepage = () => {
  return (
    <Box>
      <Header></Header>
      <Quote></Quote>
    </Box>

  );
}

export default Homepage