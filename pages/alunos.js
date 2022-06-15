import { Avatar, Box, color, ColorModeScript, Image, Img, Text, Wrap } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { Button, Menu, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, MenuList, MenuItem, Stack } from '@chakra-ui/react'
import Link from 'next/link';
import { Tag, TagLabel, TagLeftIcon, TagRightIcon, } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar'


import App from 'next/app';

export default function IndexPage() {
    return (
        <Box height="auto">

            <Navbar />

            <Flex p={20} flexWrap="wrap" paddingTop="6" mt="28" alignItems="center" justifyContent="space-evenly"  mb="12">

                <Flex direction="column">

                    <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text' fontSize={{ lg: "6xl", md: "40px" }} fontWeight='extrabold' mb={10}>Alunos</Heading>

                    <Text fontSize={{ lg: "md", md: "sm" }} mb="10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make</Text>

                </Flex>

                <Flex _dark={{ bg: "gray.700" }} bgColor="gray.200" rounded="full" p={10}>
                    <Image width={{ lg: 500, md: 300, sm: 200 }} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654259680/app_development_SVG_nzmmbi.svg'></Image>
                </Flex>

            </Flex>

            <Wrap direction="row" justifyContent="center" p={10} mb="28">
                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>

                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>

                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>

                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>

                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>

                <Link href="/conta">
                    
                    <Box maxW='md' maxH="96" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Flex justifyContent="center">
                        <Avatar size="2xl" alignItems="center" marginBlockStart="20" position="absolute" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465097/2461288_ncfcov.jpg" />
                    </Flex> 

                        <Box p='6' pt="24" justifyContent="center" alignItems="center">
                            <Box display='flex'>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >

                                <Text>Nome do Aluno</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição breve
                                </Box>
                            </Box>

                            
                        </Box>
                    </Box>
                </Link>


            </Wrap>

            <Footer />
        </Box>
    )
}
