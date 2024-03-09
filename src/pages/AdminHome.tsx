import {
  Box, Button, Divider, Heading, Icon, SimpleGrid, Stat, StatLabel, StatNumber, VStack,
} from '@chakra-ui/react';
import { Header, Footer, Quote, DiscussionPage } from './Homepage' 
import { FaUser, FaNewspaper, FaBell, FaCalendarDay, FaCog, FaDatabase, FaEnvelopeOpenText } from 'react-icons/fa';

const Overview = () => {
  return (
    <Box bg="#d9e6d3" p={6} borderRadius="lg" boxShadow="xl">
      <Heading as="h3" size="lg" textAlign="center" mb={6} color="#1d4732">
        Statistics overview
      </Heading>
      <Divider mb={6} />
      <SimpleGrid columns={2} spacing={10}>
        {/* Statistics column */}
        <VStack spacing={4} align="stretch">
          <Stat>
            <StatLabel><Icon as={FaUser} mr={2} />Total accounts</StatLabel>
            <StatNumber>1,024</StatNumber>
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaNewspaper} mr={2} />Total articles</StatLabel>
            <StatNumber>1,024</StatNumber>
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaBell} mr={2} />Days until the end of the academic year</StatLabel>
            <StatNumber>1,024</StatNumber>
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaCalendarDay} mr={2} />Term end date</StatLabel>
            <StatNumber>May 4th, 2024</StatNumber>
          </Stat>
        </VStack>

        {/* Buttons column */}
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaCog />} colorScheme="teal" variant="solid">
            Manage accounts
          </Button>
          <Button leftIcon={<FaDatabase />} colorScheme="teal" variant="solid">
            System data
          </Button>
          <Button leftIcon={<FaEnvelopeOpenText />} colorScheme="teal" variant="solid">
            Send notifications
          </Button>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
            My account
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

function Homepage() {
  return (
    <Box>
      <Header></Header>
      <Quote></Quote>
      <Overview></Overview>
      <DiscussionPage></DiscussionPage>
      <Footer></Footer>
    </Box>

  );
}

export default Homepage