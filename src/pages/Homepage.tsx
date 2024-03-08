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
  Avatar,
  Stack,
} from '@chakra-ui/react';
import about from "../assets/seven-shooter-hPKTYwJ4FUo-unsplash.jpg"
import { SearchIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import post1 from "../assets/post 1.jpg"
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
    id: 'd1',
    title: 'Photo correlations',
    author: 'Maria Omaga',
    timeAgo: '3 hours ago',
    avatarUrl: 'path_to_maria_avatar_image' // replace with actual avatar URL
  },
  {
    id: 'd2',
    title: 'Lightroom',
    author: 'Nicky Nicknack',
    timeAgo: '10 hours ago',
    avatarUrl: 'path_to_nicky_avatar_image' // replace with actual avatar URL
  },
  {
    id: 'd3',
    title: 'Took this myself! !?!?',
    author: 'Black Woman',
    timeAgo: '2 days ago',
    avatarUrl: 'path_to_black_woman_avatar_image' // replace with actual avatar URL
  },
  {
    id: 'd4',
    title: 'Saturation Enhancer',
    author: 'Shala Kaddidi DuDuhu',
    timeAgo: '5 days ago',
    avatarUrl: 'path_to_shala_avatar_image' // replace with actual avatar URL
  }
];

// Mock data for the latest article
const latestArticle = {
  id: 'a1',
  title: 'Photo correlations',
  author: 'Maria Omaga',
  timeAgo: '3 hours ago',
  avatarUrl: 'path_to_maria_avatar_image', // replace with actual avatar URL
  imageUrl: post1 // replace with actual image URL of the forest
};

function DiscussionPage() {
  return (
    <Flex background="#e1f4dc" p={5}>
      {/* Discussions & Articles Panel */}
      <Box width="50%" backgroundColor="#426B1F" borderRadius="lg" p={5} boxShadow="lg">
        <Flex justifyContent="center" mb={5}>

          {/* Centered Box for 'Discussions & Articles' text */}
          <Center
            px="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="60px"
            borderRadius="lg"
            backgroundColor="#e1f4dc"
            boxShadow="md"
            width="auto" // Make the width auto to only be as wide as its content
          >
            <Text fontSize="xl" fontWeight="bold" color="#426B1F">Discussions & Articles</Text>
          </Center>

          {/* Spacer to push the next item to the right */}
          <Box flex="1"></Box>

          {/* Centered Box for 'View all discussions' text */}
          <Center
            px="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="60px"
            borderRadius="lg"
            backgroundColor="#e1f4dc"
            boxShadow="md"
          >
            <Link color="#426B1F" fontWeight="bold">View all discussions</Link>
          </Center>

        </Flex>
        <Stack spacing={4}>
          {/* Mapping discussions */}
          {discussions.map((discussion) => (
            <Flex key={discussion.id} alignItems="center">
              <Avatar name={discussion.author} src={discussion.avatarUrl} />
              <Box ml={3}>
                <Text fontWeight="bold">{discussion.title}</Text>
                <Text fontSize="sm">{discussion.author} · {discussion.timeAgo}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>

      {/* Latest Articles Panel */}
      <Box width="50%" backgroundColor="#426B1F" borderRadius="lg" p={5} ml={5} boxShadow="lg">
        <Flex justifyContent="space-between" mb={5} alignItems="center">
          <Text fontSize="xl" fontWeight="bold">Latest Articles</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input variant="filled" placeholder="Search discussions" />
          </InputGroup>
        </Flex>
        <Box position="relative" borderRadius="lg" overflow="hidden">
          <Image src={latestArticle.imageUrl} alt={latestArticle.title} objectFit="cover" width="50%" height="50%" />
          <Flex position="absolute" bottom={3} right={3} alignItems="center">
            <Avatar name={latestArticle.author} src={latestArticle.avatarUrl} />
            <Box ml={3}>
              <Text fontWeight="bold">{latestArticle.title}</Text>
              <Text fontSize="sm">{latestArticle.author} · {latestArticle.timeAgo}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

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
      <DiscussionPage></DiscussionPage>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </Box>

  );
}

export default Homepage