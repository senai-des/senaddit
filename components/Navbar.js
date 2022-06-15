import { Box, color,Progress, Image,Img, Spacer, useColorMode, VStack,Button,Menu, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, MenuList, MenuItem, Stack, Icon, MenuDivider  } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { FaSun, FaMoon,FaInstagram,FaGithub,FaLinkedin,FaUser, FaProjectDiagram, FaBook, FaHome} from 'react-icons/fa'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';


export default function Navbar(){

    const{colorMode,toggleColorMode} = useColorMode();
    const isDark = colorMode == "dark";

    return(
        <VStack p={5}>
            <Flex width="100%" alignItems="center">


                <Link href="/">
                    <Image htmlWidth={150} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653700266/logo-senai2_vpyclk.png' alt='Dan Abramov' />
                </Link>

                <Spacer></Spacer>
                
                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6} >
                    <Link href="/">HOME</Link>
                </Flex>

                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                    <Link href="/sobre">SOBRE</Link>
                    
                </Flex>

                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                    <Link href="/portifolio">PORTIFÓLIO</Link>
                </Flex>

                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                    <Link href="/alunos">ALUNOS</Link>
                </Flex>

                <Spacer></Spacer>


                {/* BOTÃO DE LOGIN E CADASTRO NAV */}
                {/* <Stack direction='row' spacing={4} align='center'>
                    <Link href="/login">
                        <Button colorScheme='teal' size="sm" variant='solid'>
                            Login
                        </Button>
                    </Link>

                    <Link href="/cadastro">
                        <Button colorScheme='teal' size="sm" variant='outline'>
                            Cadastro
                        </Button>
                    </Link>
                </Stack> */}


                {/* MENU HAMBURGUER */}
                {/* <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>

                    <Link href="/">
                        <MenuItem icon={<FaHome />}>
                            Home
                        </MenuItem>
                    </Link>

                    <Link href="/sobre">
                        <MenuItem  icon={<ExternalLinkIcon />}>
                            Sobre
                        </MenuItem>
                    </Link>

                    <Link href="/portifolio">
                        <MenuItem  icon={<FaProjectDiagram />}>
                            Portifólio
                        </MenuItem>
                    </Link>

                    <Link href="/alunos">
                        <MenuItem  icon={<FaBook />}>
                            Alunos
                        </MenuItem>
                    </Link>

                    <MenuDivider></MenuDivider>
                    <MenuItem icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}>
                        Modo
                    </MenuItem>

                    <Link href="/conta">
                        <MenuItem  icon={<FaUser  />}>
                            Minha conta
                        </MenuItem>
                    </Link>

                </MenuList>
                </Menu> */}



                <Link href="https://github.com/" ><IconButton icon={<FaGithub />} isRound="true"></IconButton></Link>
                <Link href="https://www.linkedin.com/"><IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton></Link>
                
                <Menu>
                    <MenuButton ml={2}>
                    <Avatar name='Dan Abrahmov' size="sm" src='https://bit.ly/dan-abramov' />
                    </MenuButton>
                    <MenuList>
                        <Link href="/conta">
                            <MenuItem>Minha conta</MenuItem>
                        </Link>
                        <MenuDivider></MenuDivider>
                        <MenuItem>Log out</MenuItem>
                    </MenuList>
                </Menu>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
            </Flex>
            
        </VStack>
        
    )
}

// <Flex height="5vh" justifyContent="space-between" alignItems="center" direction="row" bgGradient="linear(to-b, green.200,pink.500)" p={10} width="100%">
        //  <Flex>
        //     <Box>
        //         <Image htmlWidth={150} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653700266/logo-senai2_vpyclk.png' alt='Dan Abramov' />
        //     </Box>
        // </Flex>
    
        // <Flex>
          
        //     <Button color='blue.400' _hover={{ bg: 'blue.500', color:"white" }} size='sm' rounded="full" variant="ghost">
        //       Login
        //     </Button>

        //     <Button color='blue.400' colorScheme="blue.400" _hover={{ bg: 'blue.500',color:"white" }} ml={4} rounded="full" size='sm' border="2px" variant="outline">
        //       Cadastro
        //     </Button>
        // </Flex>
       
        // </Flex>