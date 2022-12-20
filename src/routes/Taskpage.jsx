import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";




export default function Taskpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);
  const userimg = user.avatarUrl;

  const logout = () => {
    signOut(auth);
  };
  return (
    <Box color='#c4d1d9' minH='100%'>
      <Box bg={useColorModeValue('#161b22', '#161b22')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Add task
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar referrerPolicy="no-referrer"
                  size={'sm'}
                  src={user.photoURL}
                />
              </MenuButton>
              <MenuList bg='#161b22' color='#ffffff' >


                <MenuItem onClick={logout} _focus={ { bg: "#343940" } }>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </Box>
  );
}
