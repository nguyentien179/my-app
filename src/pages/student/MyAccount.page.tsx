import { Avatar, Box, Button, Flex, HStack, Link, VStack, useColorModeValue, Text, InputGroup, Input, InputRightElement, useToast, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { StudentSidebar } from "./MyArticles.page";
import { AdminHeader } from "../admin/AdminHome.page";
import { EditIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

// Dummy profile data
const profile = {
    name: 'Mike Hawk',
    email: 'hawk@website.edu',
    faculty: 'Faculty A',
    password: 'password123',
    major: 'Computter Science',
    image: 'path-to-avatar-image.jpg' // Replace with actual path to the avatar image
  };
  
const ProfileCard = () => {
    const [showPassword, setShowPassword] = useState(false);
    const bg = useColorModeValue('#869876', '#869876');
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
      setIsEditing(!isEditing);
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <VStack spacing={4} align="flex-start" w="100%" bg="#fff" m='10'>
        <Box bg={bg} p={4} borderRadius="lg" w="100%">
          <HStack spacing={4} align="center">
            <Avatar name={profile.name} src={profile.image} size="xl" />
            <VStack spacing={0} align="flex-start">
              <Text fontWeight="bold" fontSize="2xl" color="#fff">
                {profile.name}
              </Text>
              <Text fontSize="md" color="#fff">
                Student of {profile.faculty}
              </Text>
            </VStack>
          </HStack>
        </Box>
  
        <Box bg={bg} p={4} borderRadius="lg" w="100%">
          <VStack spacing={4} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="#fff" mb={2}>
              Personal information
            </Text>
            <HStack justifyContent="space-between" w="full">
              <Text color="#fff">Name</Text>
              <Text color="#fff">{profile.name}</Text>
            </HStack>
            <HStack justifyContent="space-between" w="full">
              <Text color="#fff">Email</Text>
              <Text color="#fff">{profile.email}</Text>
            </HStack>
            <HStack justifyContent="space-between" w="full">
              <Text color="#fff">Faculty</Text>
              <Text color="#fff">{profile.faculty}</Text>
            </HStack>
            <HStack justifyContent="space-between" w="full">
              <Text color="#fff">Major</Text>
              <Text color="#fff">{profile.major}</Text>
            </HStack>
            <VStack justifyContent="space-between" w="full" alignItems="flex-start">
                <Text color="#fff">Password</Text>
                <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    type={showPassword ? 'text' : 'password'}
                    value={profile.password}
                    isReadOnly
                    color="#fff"
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={toggleShowPassword} colorScheme="teal">
                    {showPassword ? <ViewOffIcon color="#fff" /> : <ViewIcon color="#fff" />}
                    </Button>
                </InputRightElement>
                </InputGroup>
            </VStack>

            <Button
        rightIcon={<EditIcon />}
        bg="#fff"
        color='#426b1f'
        variant="solid"
        size="xl"
        p="4"
        fontSize="lg"
        onClick={onOpen}
      >
        Edit
      </Button>
          </VStack>
    {/* Edit Profile Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Your form fields for avatar, old password, new password, and confirm new password here */}
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Upload Avatar</FormLabel>
                <Input type="file" accept="image/*" />
              </FormControl>
              <FormControl>
                <FormLabel>Old Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm New Password</FormLabel>
                <Input type="password" />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
      </VStack>
    );
  };
  

function MyAccount() {
    return(
        <Box>
            <AdminHeader />
            <Flex>
                <StudentSidebar />
                <ProfileCard />
            </Flex>
        </Box>
    )
}

export default MyAccount