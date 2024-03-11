import { VStack, Button, Box, Text, Link, FormControl, FormLabel, Input, Heading, Textarea, CheckboxGroup, Stack, Checkbox, Flex } from "@chakra-ui/react";
import { FaUserCog, FaDatabase, FaBell, FaUser } from "react-icons/fa";
import { AdminHeader } from "./AdminHome";

function Sidebar() {
    return (
        <Box w="350px" bg="#2d4b12" color="white" p={5} alignItems="center" justifyContent="center">
                
                    <VStack align="stretch" spacing={16} mt={20}>
                        <Link href='/Members'>
                            <Button bg="whitesmoke" leftIcon={<FaUserCog  />}>Manage accounts</Button>
                        </Link>
                        <Link>
                            <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaDatabase  />}>System Data</Button>
                        </Link>
                        <Link href='/SendNotif'>
                            <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaBell  />}>Send Notifications</Button>
                        </Link>
                        <Link>
                            <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaUser  />}>My Account</Button>
                        </Link>
                    </VStack>
                {/* Footer */}
                <Text position="absolute" bottom={5} left={5} fontSize="sm">Copyright Website 2024</Text>
        </Box>
    )
}

function SendNotif() {
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // Logic to handle form submission
      };
      return (
      <>
      <AdminHeader/>
      <Flex h="100vh" overflowY="hidden">
        <Sidebar/>
        <Box flex="1" p={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgGradient="linear(to-t, #e1f5dd, white)">
            <Heading as="h3" size="lg" mb={10} textColor="#83AD5F">Send notifications</Heading>
            <Box  p={6} w="full" maxW="5xl" >
                <VStack spacing={6} w="full" p={6} boxShadow="md" borderRadius="lg" bg="white">
                    <form onSubmit={handleFormSubmit}>
                    <FormControl id="title">
                        <FormLabel>Title (20 words max)</FormLabel>
                        <Input type="text" boxShadow={`0px 0px 10px rgba(130, 148, 116, 0.4)`} />
                    </FormControl>
                        <FormControl id="description" mt={4}>
                            <FormLabel>Description (100 words max)</FormLabel>
                            <Textarea boxShadow={`0px 0px 10px rgba(130, 148, 116, 0.4)`} />
                        </FormControl>
                        <FormControl id="faculty" mt={4}>
                            <FormLabel>Faculty</FormLabel>
                            <CheckboxGroup colorScheme="green">
                            <Stack direction="row">
                                <Checkbox value="facultyA">Faculty A</Checkbox>
                                <Checkbox value="facultyB">Faculty B</Checkbox>
                                <Checkbox value="facultyC">Faculty C</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                        </FormControl>
                        <FormControl id="recipient" mt={4}>
                            <FormLabel>Recipient</FormLabel>
                            <CheckboxGroup colorScheme="green">
                            <Stack direction="row">
                                <Checkbox value="students">Students</Checkbox>
                                <Checkbox value="marketingManager">Marketing Manager</Checkbox>
                                <Checkbox value="marketingCoordinator">Marketing Coordinator</Checkbox>
                                <Checkbox value="administrator">Administrator</Checkbox>
                                <Checkbox value="guest">Guest</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                        </FormControl>
                        <Button type="submit" bg="#2d4b12" color="white" mt={6} width="full" _hover={{ bg: "#1e3810" }}>
                            Send
                        </Button>
                        </form>
                    </VStack>
            </Box>
        </Box>
      </Flex>
        
        </>
      );
}

export default SendNotif;
