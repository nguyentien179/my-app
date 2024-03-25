import {
    Box,
    Text,
    Button,
    VStack,
    Link,
    Flex,
    StackDivider,
    Heading,
    InputGroup,
    HStack,
    Input,
    InputLeftElement,
    Tag,
    Image
} from '@chakra-ui/react';
import {
    FaUser,
    FaNewspaper,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { AdminHeader } from '../admin/AdminHome.page';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';

export function StudentSidebar() {
    const location = useLocation();
  
    const isActive = (path: string) => {
        return location.pathname.toLowerCase() === path.toLowerCase();
    };
  
    return (
        <Box minW="350px" bg="#2d4b12" color="white" p={5} alignItems="center" justifyContent="center" minH="100vh" // Minimum height to match the viewport height
        overflowY="auto">
            <VStack align="stretch" spacing={16} mt={20} alignItems="center" justifyContent="center">
            <Link as={RouterLink} to='/MyArticles'>
                <Button bg={isActive('/MyArticles') ? 'whitesmoke' : 'transparent'} 
                        _hover={isActive('/MyArticles') ? {} : { bg: '#fff', color: '#2d4b12' }} 
                        leftIcon={<FaNewspaper />} 
                        color={isActive('/MyArticles') ? '#2d4b12' : 'whitesmoke'} 
                        w='300px'
                        variant='outline'>View My Articles</Button>
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
type StatusType = 'Waiting' | 'Rejected' | 'Overdue' | 'Published';

  // Dummy article data
  const pendingArticles = [
    {
      id: 1,
      title: 'No alarms to no surprises',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      status: 'Rejected' as StatusType,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'There could be hell below, below',
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      status: 'Overdue' as StatusType,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'Mother Earth is pregnant for the third time',
      summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
      status: 'Waiting' as StatusType,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const publishedArticles = [
    {
      id: 4,
      title: "'Cause I'm as free as a bird now",
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      status: 'Published' as StatusType,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'Sectoral heterochromia',
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      status: 'Published' as StatusType,
      image: 'https://via.placeholder.com/150'
    }
  ];

const StatusButton : React.FC<{ status: StatusType }> = ({ status }) => {
    let color = 'gray';
    if (status === 'Waiting') color = '#426B1F';
    if (status === 'Published') color = '#426B1F';
    if (status === 'Rejected') color = '#6B1F1F';
    if (status === 'Overdue') color = '#383838';
    return <Tag fontSize="lg" fontWeight='bold' width='140px' height='50px' display='flex' alignItems='center' justifyContent='center' borderRadius="full" variant="solid" bg={color} color='white'>{status}</Tag>
  }

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
          <Input placeholder="Search my article" />
        </InputGroup>
        <Link href='/CreateArticle'>
            <Button leftIcon={<AddIcon />} bg="#426b1f" color='whitesmoke' my={4} _hover={{ bg:"grey", color:'#2d4b12', transform: 'translateY(-2px)'}} _focus={{ boxShadow: "none" }} transition="background-color 0.2s, box-shadow 0.2s, transform 0.2s">
            Create New Article
            </Button>
        </Link>
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
          <StatusButton status={article.status} />
          <Button size="sm" variant="ghost">View comment</Button>
        </HStack>
      ))}
      <Box bg="#F7FAFC" p={5} mt={10}>
        <Heading size="lg" color="#2D3748">
          Published Articles: {publishedArticles.length}
        </Heading>
      </Box>
      {/* Map through published articles */}
      {publishedArticles.map((article) => (
        <HStack key={article.id} p={5} spacing={4} align="center" borderBottomWidth="1px">
        {article.image && (
            <Image borderRadius="md" boxSize="150px" src={article.image} alt={article.title} />
        )}
          <Box flex={1} my={4}>
            <Heading fontSize="3xl" my={4}>{article.title}</Heading>
            <Text fontSize="xl" color="gray.500">{article.summary}</Text>
          </Box>
          <StatusButton status={article.status} />
        </HStack>
      ))}
    </VStack>
  );
}
function MyArticles() {
    return(
        <Box>
            <AdminHeader/>
            <Flex>
                <StudentSidebar />
                <ArticleList />
            </Flex>
            
        </Box>
    )
}

export default MyArticles;