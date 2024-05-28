import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Button,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiLogOut,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { BiBarChart } from 'react-icons/bi';
import { AiOutlineTable, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Chart', icon: BiBarChart },
  { name: 'Table', icon: AiOutlineTable },
  { name: 'Report', icon: AiOutlineFileText },
  { name: 'Forecast', icon: AiOutlineLineChart },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent onClose={onClose} display={{ base: 'none', lg: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      style={{ backgroundColor: "rgb(107,108,251)", color: "white" }}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', lg: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          PLSE
        </Text>
        <CloseButton display={{ base: 'flex', lg: 'none' }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} bg={link.name === 'Chart' ? 'rgb(203,204,254)' : undefined}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Box my="4" textAlign="center">
        <Avatar initials="DD" name="Dayasagar Dalai" />
      </Box>

      <Box mt="auto" pt="">
        {/* Pushes the logout button to the bottom */}
        <Button
  bg="rgb(203,204,254)"
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
  w={{ base: '70%', md: '90%', lg: '85%' }} 
  py={{ base: '2%', md: '5%' }} 
  
>
  <Flex align="center" justify="center">
    <Icon as={FiLogOut} mr={{ base: 2, md: 3, lg: 4 }} />
    <Text>Logout</Text>
  </Flex>
</Button>

      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  hoverBg?: string;
}

const NavItem = ({ icon, children, hoverBg, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
         
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 4, lg: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};

interface AvatarProps {
  initials: string;
  name: string;
}

const Avatar = ({ initials, name }: AvatarProps) => {
  return (
    <Flex align="center" justify="center" gap={2}>
      <Box
        bg="gray.200"
        borderRadius="full"
        w={{ base: '8', md: '10', lg: '12' }}
        h={{ base: '8', md: '10', lg: '12' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} fontWeight="bold">
          {initials}
        </Text>
      </Box>
      <Button fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} bg="rgb(203,204,254)" _hover={{ bg: 'rgb(150,150,254)' }}>
        {name}
      </Button>
    </Flex>
  );
};
