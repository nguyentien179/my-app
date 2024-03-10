import {
    Box,
    Flex,
    Text,
    Heading,
    Button,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Input,
    Select,
    VStack,
    Link,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';
  import {
    FaUserPlus,
    FaEllipsisV,
    FaChevronUp,
    FaChevronDown,
    FaSearch,
    FaSort,
  } from 'react-icons/fa';
import { AdminHeader } from './AdminHome';
  
  // Example members data
  const members = [
    {
        id: 'P0001',
        name: 'Nicky Nicknack',
        email: 'nick@website.edu',
        role: 'Student',
        major: 'Photography',
        faculty: 'Faculty A',
      },
      {
        id: 'CS001',
        name: 'Mandy Chow',
        email: 'mandy@website.edu',
        role: 'Student',
        major: 'Computer Science',
        faculty: 'Faculty A',
      },
      {
        id: 'CS002',
        name: 'Kaling Bling',
        email: 'kaling@website.edu',
        role: 'Student',
        major: 'Computer Science',
        faculty: 'Faculty B',
      },
  ];
  

  function Members() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <AdminHeader/>
            <Flex h="100vh" overflowY="hidden">
                {/* Sidebar */}
                <Box w="250px" bg="#1d4732" color="white" p={5}>
                    <Link href='/Members'>
                        <VStack align="stretch" spacing={4}>
                            <Button variant="ghost" leftIcon={<FaUserPlus />}>Manage accounts</Button>
                            {/* ... other sidebar items */}
                        </VStack>
                    </Link>
                    {/* Sidebar content */}
                    
                    {/* Footer */}
                    <Text position="absolute" bottom={5} left={5} fontSize="sm">Copyright Website 2024</Text>
                </Box>

                {/* Main content */}
                <Box flex="1" bg="#badbb2" p={5}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h2" size="lg" mb={10}>Account manager</Heading>
                        <InputGroup maxWidth="300px" mb={10}>
                        <InputLeftElement pointerEvents="none">
                            <FaSearch />
                        </InputLeftElement>
                        <Input placeholder="Search an account" />
                        </InputGroup>
                    </Flex>
                    
                    <Box bg="white" borderRadius="lg" p={8} overflowX="auto">
                        <Flex gap={4}>
                            <Select placeholder="Role">
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            </Select>
                            <Select placeholder="Sort by">
                            <option value="name">Name</option>
                            <option value="id">ID</option>
                            </Select>
                            <Button rightIcon={<FaSort />} variant="outline">
                            Ascending
                            </Button>
                        </Flex>

                        {/* Table for member data */}
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Role</Th>
                                    <Th>Major</Th>
                                    <Th>Faculty</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {members.map((member) => (
                                    <Tr key={member.id}>
                                        <Td>{member.id}</Td>
                                        <Td>{member.name}</Td>
                                        <Td>{member.email}</Td>
                                        <Td>{member.role}</Td>
                                        <Td>{member.major}</Td>
                                        <Td>{member.faculty}</Td>
                                        
                                        <Td>
                                            <Menu>
                                                <MenuButton as={IconButton} icon={<FaEllipsisV />} variant="ghost" />
                                                <MenuList>
                                                    <MenuItem>View</MenuItem>
                                                    <MenuItem>Update</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                    {/* Button to add new member */}
                    <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid" onClick={onOpen}>
                        Add an account
                    </Button>
                    {/* Drawer for adding a new member */}
                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            {/* Drawer content */}
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Flex>
        </Box>
    );
}
  
  export default Members;