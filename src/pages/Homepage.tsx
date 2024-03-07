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
  Grid,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Heading,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import about from "../assets/seven-shooter-hPKTYwJ4FUo-unsplash.jpg"
import { SearchIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
    <Box as="section" bg="white.100" my={20}>
      <Center flexDirection="column" textAlign="center" px={4}>
        <Text fontSize="2xl" mb={4}>
          Push <em>harder</em> than yesterday<br /> if you want a <em>different</em> tomorrow.
        </Text>
        <Button bg="#426B1F" color="#FFF" variant="solid" size="lg"_hover={{ bg:"#e0e0e0", color:"#426B1F" }}>
          Browse Newsfeed
        </Button>
      </Center>
    </Box>
  );
};

const AboutSection = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" p={5} bg="rgba(126,210,129,0.2)" w="full">
      {/* Left part with 2x2 grid of boxes */}
      <Grid gap={4} placeItems="center" maxWidth="40%">
        <Image src={about} alt="Descriptive text" boxSize="100%" objectFit="cover" objectPosition="center" borderRadius="lg" boxShadow="base" fallbackSrc='https://via.placeholder.com/150'/>
      </Grid>

      {/* Right part with Lorem Ipsum text */}
      <Box maxWidth={{base: "80%", md: "50%"}} textAlign="left" p={{ base:4, md: 8 }}>
        <Text fontSize="4xl" color="black" fontWeight="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text fontSize="2xl" color="black" mt={2}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Box>
    </Flex>
  );
};

const discussions = [
  {
    title: 'Photo correlations',
    author: 'Maria Omaga',
    time: '3 hours ago',
    avatar: 'path-to-avatar-1.jpg',
  },
  // ... more discussion items
];

const latestArticle = {
  title: 'Photo correlations',
  author: 'Maria Omaga',
  time: '3 hours ago',
  image: 'path-to-latest-article-image.jpg',
  avatar: 'path-to-avatar-1.jpg',
};

const DiscussionsAndArticles = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} alignItems="flex-start">
      {/* Left Section - Discussions & Articles */}
      <VStack spacing={4} alignItems="stretch" flex="1" mr={{ base: 0, md: 3 }}>
        <Text fontSize="xl" fontWeight="bold" p={4} bg="green.300" borderRadius="md">
          Discussions & Articles
        </Text>
        <Button variant="outline" size="sm" alignSelf="flex-end" mr={4}>
          View all discussions
        </Button>
        {discussions.map((discussion) => (
          <Box key={discussion.title} p={4} bg="green.100" borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Image borderRadius="full" boxSize="50px" src={discussion.avatar} alt={discussion.author} />
              <VStack alignItems="flex-start">
                <Text fontWeight="bold">{discussion.title}</Text>
                <Text fontSize="sm">{discussion.author} - {discussion.time}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>

      {/* Divider */}
      <Divider orientation="vertical" height="auto" alignSelf="stretch" mx={6} />

      {/* Right Section - Latest Article */}
      <VStack spacing={4} alignItems="stretch" flex="1" ml={{ base: 0, md: 3 }}>
        <Text fontSize="xl" fontWeight="bold" p={4} bg="green.300" borderRadius="md">
          Latest Articles <span aria-label="heart" role="img">❤️</span>
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="text" placeholder="Search discussions" />
        </InputGroup>
        <Box bg="green.100" borderRadius="md" boxShadow="md" p={4}>
          <Image borderRadius="md" src={latestArticle.image} alt={latestArticle.title} />
          <HStack justifyContent="space-between" mt={3}>
            <VStack alignItems="flex-start">
              <Text fontWeight="bold">{latestArticle.title}</Text>
              <Text fontSize="sm">{latestArticle.author} - {latestArticle.time}</Text>
            </VStack>
            <Image borderRadius="full" boxSize="50px" src={latestArticle.avatar} alt={latestArticle.author} />
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
};

const teamMembers = [
  {
    name: 'Marcus Thompson',
    title: 'Dean of Student Affairs',
    image: 'path-to-marcus-image.jpg', // Replace with your image paths
  },
  {
    name: 'DaQuan Rodriguez',
    title: 'Director of Diversity and Inclusion Programs',
    image: 'path-to-daquan-image.jpg',
  },
  {
    name: 'Jessica Patel',
    title: 'Assistant Professor of Environmental Science',
    image: 'path-to-jessica-image.jpg',
  },
  // Add more team members as needed
];

const TeamSection = () => {
  return (
    <Box bg="green.100" p={5}>
      <Heading as="h3" size="lg" textAlign="center" mb={6}>
        Team members
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyContent="center">
        {teamMembers.map((member) => (
          <VStack key={member.name} spacing={4} bg="white" p={5} borderRadius="xl" boxShadow="md">
            <Image
              src={member.image}
              alt={member.name}
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
            <Text fontWeight="bold">{member.name}</Text>
            <Text fontSize="sm">{member.title}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" bg="green.300" color="white" py={10} px={16}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        <VStack align="start" mb={{ base: 4, md: 0 }}>
          <Divider borderColor="white" />
          <Text py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Divider borderColor="white" />
        </VStack>
        
        <VStack align="center" mb={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold">Website</Text>
          <HStack>
            <IconButton as={Link} href="#" aria-label="Facebook" icon={<FaFacebook />} isRound={true} size="lg" variant="ghost" />
            <IconButton as={Link} href="#" aria-label="Twitter" icon={<FaTwitter />} isRound={true} size="lg" variant="ghost" />
            <IconButton as={Link} href="#" aria-label="Email" icon={<FaEnvelope />} isRound={true} size="lg" variant="ghost" />
          </HStack>
          <Text pt={2}>Or contact us locally</Text>
          <Text>+84 1234 5678</Text>
        </VStack>

        <VStack align="end">
          <Text fontSize="xl" fontWeight="bold">About Website</Text>
          <Link href="#" isTruncated>Terms & Conditions</Link>
          <Link href="#" isTruncated>Contact</Link>
        </VStack>
      </Flex>
    </Box>
  );
};

const Homepage = () => {
  return (
    <Box>
      <Header></Header>
      <Quote></Quote>
      <AboutSection></AboutSection>
      <DiscussionsAndArticles></DiscussionsAndArticles>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </Box>

  );
}

export default Homepage