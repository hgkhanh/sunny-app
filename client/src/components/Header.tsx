import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useColorMode, Box, Heading, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { FaGoogle, FaMoon, FaSun } from 'react-icons/fa';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    const auth = useSelector((state: any) => state.auth);

    const MenuItems = ({ children }: any) => (
        <Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
            {children}
        </Text>
    );

    const DarkModeButton = ({ icon }: any) => (
        <IconButton
            variant='ghost'
            aria-label='Switch to dark mode'
            onClick={toggleColorMode}
            _focus={{
                boxShadow: 'none'
            }}
            icon={icon} />
    );

    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <Button bg='transparent' border='1px' leftIcon={<FaGoogle />}>
                        <a href='/auth/google'>Login to Google</a>
                    </Button>
                )
            default:
                return (
                    <Button bg='transparent' border='1px'>
                        <a href='/api/logout'>Logout</a>
                    </Button >
                )
        }
    }
    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='1.5rem'
            bg='cyan.900'
            color='white'
            {...props}
        >
            <Link
                to={auth ? '/dashboard' : '/'}
            >
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
                        Sunny
                        </Heading>
                </Flex>
            </Link>
            {/* Hamburger menu */}
            <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                <svg
                    fill='white'
                    width='12px'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <title>Menu</title>
                    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
            </Box>

            <Box
                display={{ sm: show ? 'block' : 'none', md: 'flex' }}
                width={{ sm: 'full', md: 'auto' }}
                alignItems='center'
                flexGrow={1}
            >

                <Link to='/'>
                    <MenuItems>Home</MenuItems>
                </Link>
                {auth &&
                    <Link to='/dashboard'>
                        <MenuItems>Dashboard</MenuItems>
                    </Link>
                }
                <Link to='/about'>
                    <MenuItems>About</MenuItems>
                </Link>
            </Box>

            {/* Dark Mode Toggle */}
            <Box
                display={{ sm: show ? 'block' : 'none', md: 'block' }}
                mt={{ base: 4, md: 0 }}
            >
                {colorMode === 'light' ? (
                    <DarkModeButton icon={<FaMoon />} />
                ) : (
                        <DarkModeButton icon={<FaSun />} />
                    )
                }
            </Box>

            {/* Login Button */}
            <Box
                display={{ sm: show ? 'block' : 'none', md: 'block' }}
                mt={{ base: 4, md: 0 }}
                ml={4}
            >                {renderContent()}
            </Box>
        </Flex>
    )
}


export default Header;