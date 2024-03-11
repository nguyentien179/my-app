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
    Icon,
    useColorModeValue,
    Divider,
  } from '@chakra-ui/react';
  import {
    FaUserPlus,
    FaEllipsisV,
    FaChevronUp,
    FaChevronDown,
    FaSearch,
    FaSort,
    FaSortAmountDown,
    FaSortAmountUp,
    FaBell,
    FaDatabase,
    FaUser,
    FaUserCog,
  } from 'react-icons/fa';
import { AdminHeader } from './AdminHome';
import { useState } from 'react';
  
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
  
export function Sidebar() {
    return (
        <Box w="250px" bg="#2d4b12" color="white" p={5}>
                <Link href='/Members'>
                    <VStack align="stretch" spacing={16} mt={20}>
                        <Button bg="whitesmoke" leftIcon={<FaUserCog  />}>Manage accounts</Button>
                        <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaDatabase  />}>System Data</Button>
                        <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaBell  />}>Send Notifications</Button>
                        <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaUser  />}>My Account</Button>
                    </VStack>
                </Link>
                
                {/* Footer */}
                <Text position="absolute" bottom={5} left={5} fontSize="sm">Copyright Website 2024</Text>
            </Box>
    )
}

function MemberTable() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isAscending, setIsAscending] = useState(true);
    const boxShadowColor = useColorModeValue('0px 2px 12px rgba(130,148,116,0.8)', '0px 2px 12px rgba(130,148,116,0.8)');
    const toggleSortOrder = () => {
      setIsAscending(!isAscending);
    };
    return (
        <Box flex="1" bgGradient="linear(to-t, #e1f5dd, white)" p={5}>
                        <Flex justify="space-between" align="center">
                            <Heading as="h2" size="lg" mb={10} textColor="#83AD5F">Account manager</Heading>
                            <InputGroup maxWidth="300px" mb={10}>
                            <InputLeftElement pointerEvents="none">
                                <FaSearch />
                            </InputLeftElement>
                            <Input placeholder="Search an account" />
                            </InputGroup>
                        </Flex>
                        
                        <Box bg="white" borderRadius="lg" p={8} overflowX="auto" boxShadow={boxShadowColor}>
                            <Flex gap={4} >
                                <Select placeholder="Role" boxShadow={boxShadowColor} width={40}>
                                <option value="student">Student</option>
                                <option value="MarketingManager">Marketing Manager</option>
                                <option value="MarketingManager">Marketing Manager</option>
                                <option value="MarketingCoordinator">Marketing Coordinator</option>
                                <option value="Admin">Administrator</option>
                                <option value="Guest">Guest</option>
                                </Select>
                                <Select placeholder="Sort by" boxShadow={boxShadowColor} width={40}>
                                <option value="name">Name</option>
                                <option value="id">ID</option>
                                <option value="email">Email</option>
                                <option value="role">Role</option>
                                <option value="major">Major</option>
                                <option value="faculty">Faculty</option>
                                </Select>
                                <Button
                                    rightIcon={isAscending ? <Icon as={FaSortAmountUp} /> : <Icon as={FaSortAmountDown} />}
                                    variant="outline"
                                    onClick={toggleSortOrder}
                                    boxShadow={boxShadowColor}
                                    >
                                    {isAscending ? 'Ascending' : 'Descending'}
                                </Button>
                                
                            </Flex>
                            <Divider my={10} borderColor="#426B1F" width='100%'/>
                            {/* Table for member data */}
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th fontSize="3xl">ID</Th>
                                        <Th fontSize="3xl">Name</Th>
                                        <Th fontSize="3xl">Email</Th>
                                        <Th fontSize="3xl">Role</Th>
                                        <Th fontSize="3xl">Major</Th>
                                        <Th fontSize="3xl">Faculty</Th>
                                        <Th fontSize="3xl">Options</Th>
                                    </Tr>
                                </Thead>
                                <Divider my={4} borderColor="#fff"/>
                                <Tbody>
                                    {members.map((member) => (
                                        <Tr bg="rgba(137, 188, 93, 0.2)" key={member.id} _hover={{bg: 'rgba(73,133,23,0.5)', boxShadow: {boxShadowColor}, transform: 'translateY(-2px)'}} transition="background-color 0.2s, box-shadow 0.2s, transform 0.2s">
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
                                            <Divider my={4} borderColor="#426B1F" width='100%'/>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                        {/* Button to add new member */}
                        <Button leftIcon={<FaUserPlus />} bg="#2d4b12" color='#fff' variant="solid" onClick={onOpen} mt={8}>
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
    )
}

function Members() {
    return (
        <Box>
            <AdminHeader/>
            <Flex h="100vh" overflowY="hidden">
                {/* Sidebar */}
                <Sidebar/>

                {/* Main content */}
                <MemberTable/>
            </Flex>
        </Box>
    );
}

export default Members;