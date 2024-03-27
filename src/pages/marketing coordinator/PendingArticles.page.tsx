import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, VStack, Link, Box, Text, Flex, Menu, MenuButton, MenuList, MenuItem, Input, Collapse, Heading, useDisclosure, Textarea, StackDivider, HStack, InputGroup, InputLeftElement, Tag, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaNewspaper, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { AdminHeader } from "../admin/AdminHome.page";
export function MCSidebar() {
    const location = useLocation();
  
    const isActive = (path: string) => {
        return location.pathname.toLowerCase() === path.toLowerCase();
    };
  
    return (
        <Box minW="350px" bg="#2d4b12" color="white" p={5} alignItems="center" justifyContent="center" minH="100vh" // Minimum height to match the viewport height
        overflowY="auto">
            <VStack align="stretch" spacing={16} mt={20} alignItems="center" justifyContent="center">
            <Link as={RouterLink} to='/MC/PendingArticles'>
                <Button bg={isActive('/MC/PendingArticles') ? 'whitesmoke' : 'transparent'}
                        _hover={isActive('/MC/PendingArticles') ? {} : { bg: '#fff', color: '#2d4b12' }} 
                        leftIcon={<FaNewspaper />} 
                        color={isActive('/MC/PendingArticles') ? '#2d4b12' : 'whitesmoke'} 
                        w='300px'
                        variant='outline'>View Pending Articles</Button>
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

  function ArticleList() {
    type StatusType = 'Waiting' | 'Rejected' | 'Overdue' | 'Approved';
    
    const [pendingArticles, setArticles] = useState([
        {
            id: 1,
            title: 'No alarms to no surprises',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            status: 'Rejected' as StatusType,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Radiohead_-_No_Surprises_%28CD1%29.jpg/220px-Radiohead_-_No_Surprises_%28CD1%29.jpg'
          },
          {
            id: 2,
            title: 'There could be hell below, below',
            summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            status: 'Overdue' as StatusType,
            image: 'https://i.discogs.com/DV7a-pnwsxi06Ci9Fxyy8pKjWWvDgQAR9RrLE7gOMgo/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2ODk0/ODAtMTM5OTk5NzU2/OC0yMDQ0LmpwZWc.jpeg'
          },
          {
            id: 3,
            title: 'Mother Earth is pregnant for the third time',
            summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
            status: 'Waiting' as StatusType,
            image: 'https://vinylcoverart.com/media/album-covers/3065/funkadelic-maggot-brain.jpg'
          }
    ])
    
    const handleStatusChange = (id: number, newStatus: 'Approved' | 'Rejected' | 'Waiting') => {
        const updatedArticles = pendingArticles.map(article => {
          if (article.id === id) {
            return { ...article, status: newStatus };
          }
          return article;
        });
        setArticles(updatedArticles);
      };

      const StatusButton: React.FC<{ articleId: number, status: StatusType }> = ({ articleId, status }) => {
        let color = 'gray';
        if (status === 'Approved') color = '#246B1F';
        if (status === 'Rejected') color = '#6B1F1F';
        if (status === 'Waiting') color = '#246B1F';
        return (
          <Menu>
            <MenuButton as={Button} bg={color} color="white" borderRadius='20px' rightIcon={<ChevronDownIcon />}>
              {status}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleStatusChange(articleId, 'Approved')} color='#426b1f'>Approve</MenuItem>
              <MenuItem onClick={() => handleStatusChange(articleId, 'Rejected')} color='#6B1F1F'>Deny</MenuItem>
              <MenuItem onClick={() => handleStatusChange(articleId, 'Waiting')} color='gray'>Waiting</MenuItem>
            </MenuList>
          </Menu>
        );
      };
    
    
    return (
        <VStack divider={<StackDivider />}  w="100%" h="full" spacing={4} align="stretch" overflowY="auto">
          <Box bg="#F7FAFC" p={5}>
            <Heading size="lg" color="#2D3748">
              Pending Articles: {pendingArticles.length}
            </Heading>
            <InputGroup size="lg" mt={4}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.500" />
              </InputLeftElement>
              <Input placeholder="Search an article" />
            </InputGroup>
          </Box>
          {/* Map through pending articles */}
          {pendingArticles.map((article) => (
            <HStack key={article.id} p={5} spacing={4} align="center" borderBottomWidth="1px">
            {article.image && (
                <Image borderRadius="md" boxSize="150px" src={article.image} alt={article.title} />
            )}
              <Box flex={1}>
                <Heading fontSize="3xl">{article.title}</Heading>
                <Text fontSize="xl" color="gray.500">{article.summary}</Text>
              </Box>
              <StatusButton articleId={article.id} status={article.status} />
            </HStack>
          ))}
        </VStack>
      );
}

function PendingArticles() {
    return(
        <Box>
            <AdminHeader />
            <Flex>
                <MCSidebar />
                <ArticleList />
            </Flex>
        </Box>
    )
}

export default PendingArticles;