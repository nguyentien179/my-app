import {
    Box,
    Text,
    Button,
    VStack,
    Link,
    Flex,
} from '@chakra-ui/react';
import {
    FaUser,
    FaNewspaper,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { AdminHeader } from '../admin/AdminHome.page';

export function StudentSidebar() {
    const location = useLocation();
  
    const isActive = (path: any) => location.pathname === path;
  
    return (
        <Box minW="350px" bg="#2d4b12" color="white" p={5} alignItems="center" justifyContent="center" minH="100vh" // Minimum height to match the viewport height
        overflowY="auto">
            <VStack align="stretch" spacing={16} mt={20} alignItems="center" justifyContent="center">
            <Link as={RouterLink} to='/MyPosts'>
                <Button bg={isActive('/MyPosts') ? 'whitesmoke' : 'transparent'} 
                        _hover={isActive('/MyPosts') ? {} : { bg: '#fff', color: '#2d4b12' }} 
                        leftIcon={<FaNewspaper />} 
                        color={isActive('/MyPosts') ? '#2d4b12' : 'whitesmoke'} 
                        w='300px'
                        variant='outline'>View My Posts</Button>
                </Link>
                <Link as={RouterLink} to='/MyAccount'>
                <Button bg={isActive('/MyAccount') ? 'whitesmoke' : 'transparent'} 
                        _hover={isActive('/MyAccount') ? {} : { bg: '#fff', color: '#2d4b12' }} 
                        leftIcon={<FaUser />} 
                        color={isActive('/MyAccount') ? '#2d4b12' : 'whitesmoke'} 
                        w='300px'
                        variant='outline'>My Account</Button>
                </Link>
            </VStack>
            {/* Footer */}
            <Text position="absolute" bottom={5} left={5} fontSize="sm">Copyright Website 2024</Text>
        </Box>
    );
  }

function MyPosts() {
    return(
        <Box>
            <AdminHeader/>
            <Flex>
                <StudentSidebar />
            </Flex>
            
        </Box>
    )
}

export default MyPosts;